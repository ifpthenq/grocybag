console.log("ideasboardform.js loaded")
$('.save-ideasboardform-button').on('click', function(e)
{
    console.log("clicked");
	e.preventDefault();

	if (!Grocy.FrontendHelpers.ValidateForm("ideasboard-form", true))
	{
		return;
	}
    
    var jsonData = $('#ideasboard-form').serializeJSON();
    console.log(jsonData);
    console.log("save button was clicked and new js is loading 2");
    Grocy.FrontendHelpers.BeginUiBusy("ideasboard-form");

    console.log(Grocy.EditMode);
    if(Grocy.EditMode === 'create')
    {
        var addAnother = $(e.currentTarget).hasClass("add-another");

        Grocy.Api.Post('objects/ideasboard', jsonData,
        function(result)
        {
            console.log(result);
            Grocy.EditObjectId = result.created_object_id;
            Grocy.Components.UserfieldsForm.Save(function()
            {
                if (GetUriParam("embedded") !== undefined)
                {
                    if (addAnother)
                    {
                        window.location.href = U('/task/new?embedded');
                    }
                    else
                    {
                        window.parent.postMessage(WindowMessageBag("Reload"), Grocy.BaseUrl);
                    }
                }
                else
                {
                    if (addAnother)
                    {
                        window.location.href = U('/task/new');
                    }
                    else
                    {
                        window.location.href = U('/ideasboard');
                    }
                }
            });
        },
        function(xhr)
        {
            Grocy.FrontendHelpers.EndUiBusy("task-form");
            Grocy.FrontendHelpers.ShowGenericError('Error while saving, probably this item already exists', xhr.response)
        }
            

    );
    }//end if create

});//end click event

$('.select-ideasboard-button').on('click', function(e)
{
    e.preventDefault();
    console.log("clicked");
});

$('#ideasbaord-form input').keyup(function(event)
{
	Grocy.FrontendHelpers.ValidateForm('ideasboard-form');
});

$('#ideasboard-form input').keydown(function(event)
{
	if (event.keyCode === 13) // Enter
	{
		event.preventDefault();

		if (!Grocy.FrontendHelpers.ValidateForm('ideasboard-form'))
		{
			return false;
		}
		else
		{
			$('.save-ideasboard-button').first().click();
		}
	}
});
Grocy.FrontendHelpers.ValidateForm('ideasboard-form');