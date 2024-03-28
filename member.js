function skillsMember() {
  // Get the member id from the URL
  var memberId = window.location.href.split("/").pop();
  // Get the member data
  $.get("/api/members/" + memberId, function(data) {
    // Create a new div to hold the member data
    var memberDiv = $("<div>");
    // Add the member data to the div
    memberDiv.append("<h2>" + data.name + "</h2>");
    memberDiv.append("<h3>Skills:</h3>");
    // Create a new ul to hold the member's skills
    var skillList = $("<ul>");
    // Loop through the member's skills
    for (var i = 0; i < data.Skills.length; i++) {
      // Create a new li for each skill
      var skillItem = $("<li>");
      // Add the skill to the li
      skillItem.text(data.Skills[i].name);
      // Add the li to the ul
      skillList.append(skillItem);
    }
    // Add the ul to the member div
    memberDiv.append(skillList);
    // Add the member div to the page
    $("#member").append(memberDiv);
  });
}