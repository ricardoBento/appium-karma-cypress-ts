// Tabs with arrows

$('.arrow-tabs a').click(function (e) {
    e.preventDefault()
    var selectedTab = $(this).parent();
    var ul = selectedTab.parent();
    ul.find("li").removeClass("ui-tabs-active ui-state-active");
    selectedTab.addClass("ui-tabs-active ui-state-active");
    
    // show/hide content
      var content = ul.parent().find(".contents .ui-tabs-panel");
      content.hide();  
      ul.parent().find($(this).attr("href")).fadeIn(200);   
  })

  $('#help-arrow-tabs a').click(function (e) {
    e.preventDefault()
    var selectedTab = $(this).parent();
    var ul = selectedTab.parent();
    ul.find("li").removeClass("ui-tabs-active ui-state-active");
    selectedTab.addClass("ui-tabs-active ui-state-active");
    
    // show/hide content
      var content = ul.parent().find(".contents .ui-tabs-panel");
      content.hide();  
      ul.parent().find($(this).attr("href")).fadeIn(200);   
  });