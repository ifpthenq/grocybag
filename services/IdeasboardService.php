<?php

namespace Grocy\Services;

use LessQL\Result;

class IdeasboardService extends BaseService
{
	
    
    public function GetCurrent(): Result
	{
		
		$ideasboards = $this->getDatabase()->ideasboards_current();
		
		return $ideasboards;
	}

	

}
