$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BeamCoreAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Beam Core API Cases",
  "description": "",
  "id": "beam-core-api-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 115864,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Retrieve Secure API using GET one",
  "description": "",
  "id": "beam-core-api-cases;retrieve-secure-api-using-get-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Send the API call GET http://core.api.stg.beamwallet.me/trusted-application-api/v1/secure/settings without query parameters",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://core.api.stg.beamwallet.me/trusted-application-api/v1/secure/settings",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsWithoutQueryParameters(String)"
});
formatter.result({
  "duration": 1644605631,
  "error_message": "org.json.JSONException: A JSONArray text must start with \u0027[\u0027 at character 1\n\tat org.json.JSONTokener.syntaxError(JSONTokener.java:410)\n\tat org.json.JSONArray.\u003cinit\u003e(JSONArray.java:113)\n\tat org.json.JSONArray.\u003cinit\u003e(JSONArray.java:157)\n\tat com.gitHub.automation.steps.GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsWithoutQueryParameters(GitHubJobsAPIStepDef.java:54)\n\tat ✽.When Send the API call GET http://core.api.stg.beamwallet.me/trusted-application-api/v1/secure/settings without query parameters(BeamCoreAPI.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 84731,
  "status": "passed"
});
formatter.uri("GitHubJobsAPI.feature");
formatter.feature({
  "line": 1,
  "name": "List of API Cases",
  "description": "",
  "id": "list-of-api-cases",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Retrieve all Jobs using GET API contain \u003cscenarioName\u003e",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "\u003curl\u003e"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "url"
      ],
      "line": 12,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;1"
    },
    {
      "cells": [
        "Valid Description",
        "?description\u003dQA"
      ],
      "line": 13,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;2"
    },
    {
      "cells": [
        "Empty Description",
        "?description\u003d"
      ],
      "line": 14,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;3"
    },
    {
      "cells": [
        "Ruby Description",
        "?description\u003druby"
      ],
      "line": 15,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;4"
    },
    {
      "cells": [
        "Valid Description",
        "?description\u003djava"
      ],
      "line": 16,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;5"
    },
    {
      "cells": [
        "Valid location",
        "?location\u003dSan Francisco"
      ],
      "line": 17,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;6"
    },
    {
      "cells": [
        "Valid location and Lat/Long",
        "?location\u003dSan Francisco\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823"
      ],
      "line": 18,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;7"
    },
    {
      "cells": [
        "Valid location and Full Time",
        "?location\u003dSan Francisco\u0026full_time\u003dtrue"
      ],
      "line": 19,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;8"
    },
    {
      "cells": [
        "Valid location have Zip code",
        "?location\u003d10106"
      ],
      "line": 20,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;9"
    },
    {
      "cells": [
        "Valid Description and location",
        "?location\u003dSan Francisco\u0026description\u003druby"
      ],
      "line": 21,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;10"
    },
    {
      "cells": [
        "Valid Lat and Long",
        "?lat\u003d37.3229978\u0026long\u003d-122.0321823"
      ],
      "line": 22,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;11"
    },
    {
      "cells": [
        "Valid Description, location and Lat/Long",
        "?location\u003dSan Francisco\u0026description\u003druby\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823"
      ],
      "line": 23,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;12"
    },
    {
      "cells": [
        "Full Time",
        "?full_time\u003dtrue"
      ],
      "line": 24,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;13"
    },
    {
      "cells": [
        "Full Time and Lat/Long",
        "?full_time\u003dtrue\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823"
      ],
      "line": 25,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;14"
    },
    {
      "cells": [
        "Valid Description, location, Lat/Long and Full Time True",
        "?location\u003dSan Francisco\u0026description\u003druby\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823\u0026full_time\u003dtrue"
      ],
      "line": 26,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;15"
    },
    {
      "cells": [
        "Valid Description, Lat/Long and Full Time True",
        "?description\u003druby\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823\u0026full_time\u003dtrue"
      ],
      "line": 27,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;16"
    },
    {
      "cells": [
        "Valid Description, location and Full Time True",
        "?location\u003dSan Francisco\u0026description\u003druby\u0026full_time\u003dtrue"
      ],
      "line": 28,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;17"
    },
    {
      "cells": [
        "Description and Lat/Long",
        "?description\u003dQA\u0026long\u003d10\u0026lat\u003d10"
      ],
      "line": 29,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;18"
    },
    {
      "cells": [
        "Description and Full Time True",
        "?description\u003dQA\u0026full_time\u003dtrue"
      ],
      "line": 30,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;19"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 77374,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Retrieve all Jobs using GET API contain Valid Description",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003dQA"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2133440363,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 2739847,
  "status": "passed"
});
formatter.after({
  "duration": 73859,
  "status": "passed"
});
formatter.before({
  "duration": 115667,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Retrieve all Jobs using GET API contain Empty Description",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003d"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2098437872,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 57335,
  "status": "passed"
});
formatter.after({
  "duration": 53634,
  "status": "passed"
});
formatter.before({
  "duration": 64830,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Retrieve all Jobs using GET API contain Ruby Description",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003druby"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1809097828,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 53998,
  "status": "passed"
});
formatter.after({
  "duration": 44477,
  "status": "passed"
});
formatter.before({
  "duration": 72099,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Retrieve all Jobs using GET API contain Valid Description",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003djava"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2093551665,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 45274,
  "status": "passed"
});
formatter.after({
  "duration": 36051,
  "status": "passed"
});
formatter.before({
  "duration": 56680,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Retrieve all Jobs using GET API contain Valid location",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1381289474,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 57545,
  "status": "passed"
});
formatter.after({
  "duration": 57974,
  "status": "passed"
});
formatter.before({
  "duration": 66669,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Retrieve all Jobs using GET API contain Valid location and Lat/Long",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1255855269,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 43953,
  "status": "passed"
});
formatter.after({
  "duration": 43659,
  "status": "passed"
});
formatter.before({
  "duration": 81620,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Retrieve all Jobs using GET API contain Valid location and Full Time",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco\u0026full_time\u003dtrue"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1321554208,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 40459,
  "status": "passed"
});
formatter.after({
  "duration": 37336,
  "status": "passed"
});
formatter.before({
  "duration": 79114,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Retrieve all Jobs using GET API contain Valid location have Zip code",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003d10106"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2161414154,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 45306,
  "status": "passed"
});
formatter.after({
  "duration": 53988,
  "status": "passed"
});
formatter.before({
  "duration": 117134,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Retrieve all Jobs using GET API contain Valid Description and location",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco\u0026description\u003druby"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1059076263,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 43810,
  "status": "passed"
});
formatter.after({
  "duration": 37455,
  "status": "passed"
});
formatter.before({
  "duration": 61940,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Retrieve all Jobs using GET API contain Valid Lat and Long",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?lat\u003d37.3229978\u0026long\u003d-122.0321823"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1390392263,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 46170,
  "status": "passed"
});
formatter.after({
  "duration": 61531,
  "status": "passed"
});
formatter.before({
  "duration": 79608,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Retrieve all Jobs using GET API contain Valid Description, location and Lat/Long",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco\u0026description\u003druby\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1046754619,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 47342,
  "status": "passed"
});
formatter.after({
  "duration": 36034,
  "status": "passed"
});
formatter.before({
  "duration": 56319,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Retrieve all Jobs using GET API contain Full Time",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?full_time\u003dtrue"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2172523773,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 77487,
  "status": "passed"
});
formatter.after({
  "duration": 41254,
  "status": "passed"
});
formatter.before({
  "duration": 163043,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Retrieve all Jobs using GET API contain Full Time and Lat/Long",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?full_time\u003dtrue\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1339011548,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 40022,
  "status": "passed"
});
formatter.after({
  "duration": 35879,
  "status": "passed"
});
formatter.before({
  "duration": 56809,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Retrieve all Jobs using GET API contain Valid Description, location, Lat/Long and Full Time True",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco\u0026description\u003druby\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823\u0026full_time\u003dtrue"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 969491199,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 32541,
  "status": "passed"
});
formatter.after({
  "duration": 32726,
  "status": "passed"
});
formatter.before({
  "duration": 302156,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Retrieve all Jobs using GET API contain Valid Description, Lat/Long and Full Time True",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003druby\u0026lat\u003d37.3229978\u0026long\u003d-122.0321823\u0026full_time\u003dtrue"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1086238515,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 35242,
  "status": "passed"
});
formatter.after({
  "duration": 339603,
  "status": "passed"
});
formatter.before({
  "duration": 55370,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Retrieve all Jobs using GET API contain Valid Description, location and Full Time True",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?location\u003dSan Francisco\u0026description\u003druby\u0026full_time\u003dtrue"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 985197703,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 315208,
  "status": "passed"
});
formatter.after({
  "duration": 50454,
  "status": "passed"
});
formatter.before({
  "duration": 52809,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Retrieve all Jobs using GET API contain Description and Lat/Long",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003dQA\u0026long\u003d10\u0026lat\u003d10"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 848910510,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 40899,
  "status": "passed"
});
formatter.after({
  "duration": 27677,
  "status": "passed"
});
formatter.before({
  "duration": 118127,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Retrieve all Jobs using GET API contain Description and Full Time True",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "?description\u003dQA\u0026full_time\u003dtrue"
  }
});
formatter.step({
  "line": 9,
  "name": "Should received success response with status code 200.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 1493737219,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.IShouldReceivedResponseWithStatusCode()"
});
formatter.result({
  "duration": 38187,
  "status": "passed"
});
formatter.after({
  "duration": 34018,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Retrieve all Jobs using GET API To verify the Jobs number in \u003cscenarioName\u003e",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 35,
    "value": "\u003curl\u003e"
  }
});
formatter.step({
  "line": 38,
  "name": "Should receive number of Jobs 50 per page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "url"
      ],
      "line": 41,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;1"
    },
    {
      "cells": [
        "First Page",
        "?page\u003d0"
      ],
      "line": 42,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;2"
    },
    {
      "cells": [
        "Second Page",
        "?page\u003d1"
      ],
      "line": 43,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;3"
    },
    {
      "cells": [
        "Third Page",
        "?page\u003d2"
      ],
      "line": 44,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44770,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Retrieve all Jobs using GET API To verify the Jobs number in First Page",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 35,
    "value": "?page\u003d0"
  }
});
formatter.step({
  "line": 38,
  "name": "Should receive number of Jobs 50 per page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2165108480,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.ShouldReceivedNumberOfJobsPerPage()"
});
formatter.result({
  "duration": 109029,
  "status": "passed"
});
formatter.after({
  "duration": 30403,
  "status": "passed"
});
formatter.before({
  "duration": 48033,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Retrieve all Jobs using GET API To verify the Jobs number in Second Page",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 35,
    "value": "?page\u003d1"
  }
});
formatter.step({
  "line": 38,
  "name": "Should receive number of Jobs 50 per page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2034866821,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.ShouldReceivedNumberOfJobsPerPage()"
});
formatter.result({
  "duration": 50378,
  "status": "passed"
});
formatter.after({
  "duration": 32836,
  "status": "passed"
});
formatter.before({
  "duration": 63889,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Retrieve all Jobs using GET API To verify the Jobs number in Third Page",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-to-verify-the-jobs-number-in-\u003cscenarioname\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 35,
    "value": "?page\u003d2"
  }
});
formatter.step({
  "line": 38,
  "name": "Should receive number of Jobs 50 per page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2062551445,
  "status": "passed"
});
formatter.match({
  "location": "GitHubJobsAPIStepDef.ShouldReceivedNumberOfJobsPerPage()"
});
formatter.result({
  "duration": 58775,
  "status": "passed"
});
formatter.after({
  "duration": 22775,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Retrieve all Jobs using GET API contain \u003cscenarioName\u003e To verify the result if it have the expected jobs",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "\u003curl\u003e"
  }
});
formatter.step({
  "line": 52,
  "name": "Should received description have \u003cdescription\u003e.",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "url",
        "description"
      ],
      "line": 55,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;1"
    },
    {
      "cells": [
        "Specific Description",
        "?description\u003dtest",
        "test"
      ],
      "line": 56,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;2"
    },
    {
      "cells": [
        "Valid Description",
        "?description\u003dJava",
        "Java"
      ],
      "line": 57,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;3"
    },
    {
      "cells": [
        "Invalid Description",
        "?description\u003dhussein",
        "hussein"
      ],
      "line": 58,
      "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62219,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Retrieve all Jobs using GET API contain Specific Description To verify the result if it have the expected jobs",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "?description\u003dtest"
  }
});
formatter.step({
  "line": 52,
  "name": "Should received description have test.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2006468722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 33
    }
  ],
  "location": "GitHubJobsAPIStepDef.shouldReceivedDescriptionHaveDescription(String)"
});
formatter.result({
  "duration": 9118162,
  "error_message": "java.lang.AssertionError: The following asserts failed:\nWe can\u0027t found [test] in the description in Job number 22\n, We can\u0027t found [test] in the description in Job number 24\n, We can\u0027t found [test] in the description in Job number 27\n\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:38)\n\tat com.gitHub.automation.steps.GitHubJobsAPIStepDef.shouldReceivedDescriptionHaveDescription(GitHubJobsAPIStepDef.java:82)\n\tat ✽.Then Should received description have test.(GitHubJobsAPI.feature:52)\n",
  "status": "failed"
});
formatter.after({
  "duration": 32518,
  "status": "passed"
});
formatter.before({
  "duration": 61938,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Retrieve all Jobs using GET API contain Valid Description To verify the result if it have the expected jobs",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "?description\u003dJava"
  }
});
formatter.step({
  "line": 52,
  "name": "Should received description have Java.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 2096919667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 33
    }
  ],
  "location": "GitHubJobsAPIStepDef.shouldReceivedDescriptionHaveDescription(String)"
});
formatter.result({
  "duration": 7839632,
  "error_message": "java.lang.AssertionError: The following asserts failed:\nWe can\u0027t found [Java] in the description in Job number 2\n\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:38)\n\tat com.gitHub.automation.steps.GitHubJobsAPIStepDef.shouldReceivedDescriptionHaveDescription(GitHubJobsAPIStepDef.java:82)\n\tat ✽.Then Should received description have Java.(GitHubJobsAPI.feature:52)\n",
  "status": "failed"
});
formatter.after({
  "duration": 25852,
  "status": "passed"
});
formatter.before({
  "duration": 42957,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Retrieve all Jobs using GET API contain Invalid Description To verify the result if it have the expected jobs",
  "description": "",
  "id": "list-of-api-cases;retrieve-all-jobs-using-get-api-contain-\u003cscenarioname\u003e-to-verify-the-result-if-it-have-the-expected-jobs;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Git_Hub-Fast"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Send the API call GET https://jobs.github.com/positions.json with query parameters",
  "matchedColumns": [
    1
  ],
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "?description\u003dhussein"
  }
});
formatter.step({
  "line": 52,
  "name": "Should received description have hussein.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://jobs.github.com/positions.json",
      "offset": 22
    }
  ],
  "location": "GitHubJobsAPIStepDef.iSendTheAPICallGETHttpsJobsGithubComPositionsJsonWithQueryParameters(String,String)"
});
formatter.result({
  "duration": 836057374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hussein",
      "offset": 33
    }
  ],
  "location": "GitHubJobsAPIStepDef.shouldReceivedDescriptionHaveDescription(String)"
});
formatter.result({
  "duration": 137466,
  "status": "passed"
});
formatter.after({
  "duration": 27034,
  "status": "passed"
});
});