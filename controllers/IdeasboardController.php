<?php

namespace Grocy\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class IdeasboardController extends BaseController
{
	public function getIdeasBoard(Request $request, Response $response, array $args)
	{
		
		//Check if this is a delete operation
		if (isset($args['delete']))
		{
			
			$row = $this->getDatabase()->ideasboard()->where('id = :1', $args['boardId'])->fetch();
			//echo "...................................................ECHOING ROW....." . $row->id;
			if ($row == null)
			{
				//return $this->GenericErrorResponse($response, 'Object not found', 400);
				echo ("                         Object not found");
			}

			if (!($row == null)){
				$row->delete();
			}
		}else{
			//echo " ............................................ NOT a DELETE operation <br>";
		}
		//echo "......................................................................." . $args['entity'] . "<br>";
		
		
		
		
		//print_r($args);
		//echo ("is this even being called? getIdeasBoard      " . $args);
		$ideasboards = $this->getIdeasboardService()->GetCurrent();
		//if ideasboards is empty, selected boards should be "There are no boards"
		if (empty($ideasboards))
		{
			
			$selectedboard = "There are no boards to display";
		}
		else {
			
			$selectedboard = $ideasboards->fetch();
			
			
		}
		
		return $this->renderPage($response, 'ideasboard', [
			'ideasboards' => $ideasboards,
			'selectedboard' => $selectedboard
			
		]);
	}

	public function IdeaSelect(Request $request, Response $response, array $args)
	{
		
		
		
		if ($args['boardId'] == 'new')
		{
			return $this->renderPage($response, 'ideasboardform', [
				'mode' => 'create',
				'userfields' => $this->getUserfieldsService()->GetFields('tasks')
			]);
		}
		//echo ("xxxxxxis this even being called? IdeaSelect   BoardId is ". $args['boardId']);
		$ideasboards = $this->getIdeasboardService()->GetCurrent();

		$idea = $this->getDatabase()->ideasboard()->where('id = :1', $args['boardId']);
		if (empty($idea))
		{
			$selectedboard = "Cannot display this board. Delete it and try again."; 
		}
		else {
			$selectedboard = $idea->fetch();
		}
		$selectedboard = $idea->fetch();
		//echo "the uri is ". $selectedboard->uri;
		
		return $this->renderPage($response, 'ideasboard', [
			'ideasboards' => $ideasboards,
			'selectedboard' => $selectedboard
			
		]);
	}

	public function DeleteBoard(Request $request, Response $response, array $args)
	{
		$args['entity'] = 'ideasboard';
		$args['delete'] = true;
		/*
		$row = $this->getDatabase()->{$args['entity']}($args['objectId']);
			if ($row == null)
			{
				return $this->GenericErrorResponse($response, 'Object not found', 400);
			}

			$row->delete();

			//return $this->EmptyApiResponse($response);
			return $this->getIdeasBoard($request, $response, $args);
		*/

		return $this->getIdeasBoard($request, $response, $args);
	}


	public function Overview(Request $request, Response $response, array $args)
	{
		$usersService = $this->getUsersService();
		$nextXDays = $usersService->GetUserSettings(GROCY_USER_ID)['tasks_due_soon_days'];

		if (isset($request->getQueryParams()['include_done']))
		{
			$tasks = $this->getDatabase()->tasks()->orderBy('name', 'COLLATE NOCASE');
		}
		else
		{
			$tasks = $this->getTasksService()->GetCurrent();
		}

		foreach ($tasks as $task)
		{
			if (empty($task->due_date))
			{
				$task->due_type = '';
			}
			elseif ($task->due_date < date('Y-m-d 23:59:59', strtotime('-1 days')))
			{
				$task->due_type = 'overdue';
			}
			elseif ($task->due_date <= date('Y-m-d 23:59:59'))
			{
				$task->due_type = 'duetoday';
			}
			elseif ($nextXDays > 0 && $task->due_date <= date('Y-m-d 23:59:59', strtotime('+' . $nextXDays . ' days')))
			{
				$task->due_type = 'duesoon';
			}
		}

		return $this->renderPage($response, 'ideasboard', [
			'tasks' => $tasks,
			'nextXDays' => $nextXDays,
			'taskCategories' => $this->getDatabase()->task_categories()->where('active = 1')->orderBy('name', 'COLLATE NOCASE'),
			'users' => $this->getDatabase()->users(),
			'userfields' => $this->getUserfieldsService()->GetFields('tasks'),
			'userfieldValues' => $this->getUserfieldsService()->GetAllValues('tasks')
		]);
	}
	

	public function TaskCategoriesList(Request $request, Response $response, array $args)
	{
		if (isset($request->getQueryParams()['include_disabled']))
		{
			$categories = $this->getDatabase()->task_categories()->orderBy('name', 'COLLATE NOCASE');
		}
		else
		{
			$categories = $this->getDatabase()->task_categories()->where('active = 1')->orderBy('name', 'COLLATE NOCASE');
		}

		return $this->renderPage($response, 'taskcategories', [
			'taskCategories' => $categories,
			'userfields' => $this->getUserfieldsService()->GetFields('task_categories'),
			'userfieldValues' => $this->getUserfieldsService()->GetAllValues('task_categories')
		]);
	}

	public function TaskCategoryEditForm(Request $request, Response $response, array $args)
	{
		if ($args['categoryId'] == 'new')
		{
			return $this->renderPage($response, 'taskcategoryform', [
				'mode' => 'create',
				'userfields' => $this->getUserfieldsService()->GetFields('task_categories')
			]);
		}
		else
		{
			return $this->renderPage($response, 'taskcategoryform', [
				'category' => $this->getDatabase()->task_categories($args['categoryId']),
				'mode' => 'edit',
				'userfields' => $this->getUserfieldsService()->GetFields('task_categories')
			]);
		}
	}

	public function IdeaEditForm(Request $request, Response $response, array $args)
	{
		if ($args['boardId'] == 'new')
		{
			return $this->renderPage($response, 'ideasboardform', [
				'mode' => 'create',
				//'taskCategories' => $this->getDatabase()->task_categories()->where('active = 1')->orderBy('name', 'COLLATE NOCASE'),
				//'users' => $this->getDatabase()->users()->orderBy('username'),
				'userfields' => $this->getUserfieldsService()->GetFields('tasks')
			]);
		}
		else
		{
			return $this->renderPage($response, 'taskform', [
				'task' => $this->getDatabase()->tasks($args['taskId']),
				'mode' => 'edit',
				'taskCategories' => $this->getDatabase()->task_categories()->where('active = 1')->orderBy('name', 'COLLATE NOCASE'),
				'users' => $this->getDatabase()->users()->orderBy('username'),
				'userfields' => $this->getUserfieldsService()->GetFields('tasks')
			]);
		}
	}

	public function TasksSettings(Request $request, Response $response, array $args)
	{
		return $this->renderPage($response, 'taskssettings');
	}
}
