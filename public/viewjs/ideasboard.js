/*
$('.delete-ideasboard-button').on('click', function(e)
{
    e.preventDefault();
    console.log("delete button was clicked");
    console.log(e);

    var objectName = e.currentTarget.getAttribute("data-task-id");
    console.log(objectName);
    
    bootbox.confirm(__t('Are you sure to delete task "%s"?', objectName), function(result)
    {
        if (result)
        {
            Grocy.FrontendHelpers.BeginUiBusy("ideasboard-form");

            Grocy.Api.Delete('objects/ideasboard/' + objectName, {},
                function(result)
                {
                    window.location.href = U('/ideasboard');
                },
                function(xhr)
                {
                    Grocy.FrontendHelpers.EndUiBusy("ideasboard-form");
                }
            );
        }
    });
});

*/