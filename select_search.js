function select_search(search,option,messageNoResult='No Result') {
    //check if element don't exist in dom
    if ( option.length==0){
        return;
    }

    /*hide option don't contain search in input*/
    var firstItemSelected=null;
    $(option).each(function () {
        //check if option is #optionSearchNoResult
        if ($(this).attr('id') == 'optionSearchNoResult') {
            $(this).remove();
        }else {
            var result=$(this).html().search(search);
            if (result == -1 ){
                $(this).removeAttr('selected').hide();
            }else {
                $(this).show();
                if (firstItemSelected==null){
                    firstItemSelected = $(this);
                    $(this).attr('selected','true');
                }
            }
        }
    });
    if (firstItemSelected==null){
        option.eq(0).before(
            "<option id='optionSearchNoResult' selected>"+messageNoResult+"</option>"
        );
    }
}