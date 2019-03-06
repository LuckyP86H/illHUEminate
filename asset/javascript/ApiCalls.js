var queryURL = "https://api/LuckyP86H/lights" + 
    queryTopic + "&api_key=" + API_KEY + "&limit=" + limit;

	// call AJAX
	$.ajax({
		url: queryURL,
		method: "GET"
	})