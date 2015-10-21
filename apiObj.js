var data ={
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult, Tfl.Api.Presentation.Entities",
    "journeys": [{
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2015-10-20T16:59:00",
        "duration": 2,
        "arrivalDateTime": "2015-10-20T17:01:00",
        "legs": [{
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 2,
            "instruction": {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Central line to Liverpool Street",
                "detailed": "Central line towards West Ruislip, Ealing Broadway, Northolt, or White City",
                "steps": []
            },
            "obstacles": [],
            "departureTime": "2015-10-20T16:59:00",
            "arrivalTime": "2015-10-20T17:01:00",
            "departurePoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUBLG",
                "platformName": "",
                "icsCode": "1000022",
                "commonName": "Bethnal  Green Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.52706146271,
                "lon": -0.054590331250000006
            },
            "arrivalPoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLULVT",
                "platformName": "",
                "icsCode": "1000138",
                "commonName": "Liverpool Street Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.51804675377,
                "lon": -0.08218753614
            },
            "path": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.52706146271, -0.05459033125],[51.52722404509, -0.05680355916],[51.52721609488, -0.05740939514],[51.52673448962, -0.06199990871],[51.52627016277, -0.06601293885],[51.52599644134, -0.06795630868],[51.52574772654, -0.0692354557],[51.52551932062, -0.07011008069],[51.52479951721, -0.07172625575],[51.52385621911, -0.07397167997],[51.52336220584, -0.0751025076],[51.52270571817, -0.0761969125],[51.51804675377, -0.08218753614]]",
                "stopPoints": [{
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULVT",
                    "name": "Liverpool Street Underground Station",
                    "uri": "/StopPoint/940GZZLULVT",
                    "type": "StopPoint"
                }]
            },
            "routeOptions": [{
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Central",
                "directions": ["West Ruislip Underground Station", "Ealing Broadway Underground Station", "Northolt Underground Station", "White City Underground Station"],
                "lineIdentifier": {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "central",
                    "name": "Central",
                    "uri": "/Line/central",
                    "type": "Line"
                }
            }],
            "mode": {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "tube",
                "name": "tube",
                "type": "Mode"
            },
            "disruptions": [{
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "stopInfo",
                "categoryDescription": "PlannedWork",
                "description": "RUGBY WORLD CUP, MATCHES IN LONDON BETWEEN FRIDAY 18 SEPTEMBER AND SATURDAY 31 OCTOBER. Large numbers of spectators will be travelling to and from the venues, with additional fans heading to Fanzones to enjoy the rugby action live on giant screens. This means that certain parts of the Capital will be much busier than usual before and after each match.",
                "created": "2015-09-14T15:55:00",
                "lastUpdate": "2015-09-14T16:00:00"
            }, {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "Information",
                "type": "stopInfo",
                "categoryDescription": "Information",
                "description": "Liverpool Street Station: Main ticket hall improvements will start to take place from October 2015, when the ticket office in this station closes.  Work will last for up to 12 weeks as we install additional ticket machines.\n\nThe ticket office will not reopen when the work is complete. \n\nTo pay for travel, you can now:\nUse your contactless payment card\nUse the smarter ticket machines\nor\nBuy tickets or top up your Oyster card online or at nearby Oyster Ticket Stops.",
                "created": "2015-10-05T11:04:00",
                "lastUpdate": "2015-10-05T11:07:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        }]
    }, {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2015-10-20T17:01:00",
        "duration": 3,
        "arrivalDateTime": "2015-10-20T17:04:00",
        "legs": [{
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 3,
            "instruction": {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Central line to Liverpool Street",
                "detailed": "Central line towards North Acton, Ealing Broadway, West Ruislip, or Northolt",
                "steps": []
            },
            "obstacles": [],
            "departureTime": "2015-10-20T17:01:00",
            "arrivalTime": "2015-10-20T17:04:00",
            "departurePoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUBLG",
                "platformName": "",
                "icsCode": "1000022",
                "commonName": "Bethnal Green Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.52706146271,
                "lon": -0.054590331250000006
            },
            "arrivalPoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLULVT",
                "platformName": "",
                "icsCode": "1000138",
                "commonName": "Liverpool Street Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.51804675377,
                "lon": -0.08218753614
            },
            "path": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.52706146271, -0.05459033125],[51.52722404509, -0.05680355916],[51.52721609488, -0.05740939514],[51.52673448962, -0.06199990871],[51.52627016277, -0.06601293885],[51.52599644134, -0.06795630868],[51.52574772654, -0.0692354557],[51.52551932062, -0.07011008069],[51.52479951721, -0.07172625575],[51.52385621911, -0.07397167997],[51.52336220584, -0.0751025076],[51.52270571817, -0.0761969125],[51.51804675377, -0.08218753614]]",
                "stopPoints": [{
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULVT",
                    "name": "Liverpool Street Underground Station",
                    "uri": "/StopPoint/940GZZLULVT",
                    "type": "StopPoint"
                }]
            },
            "routeOptions": [{
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Central",
                "directions": ["North Acton Underground Station", "Ealing Broadway Underground Station", "West Ruislip Underground Station", "Northolt Underground Station"],
                "lineIdentifier": {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "central",
                    "name": "Central",
                    "uri": "/Line/central",
                    "type": "Line"
                }
            }],
            "mode": {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "tube",
                "name": "tube",
                "type": "Mode"
            },
            "disruptions": [{
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "stopInfo",
                "categoryDescription": "PlannedWork",
                "description": "RUGBY WORLD CUP, MATCHES IN LONDON BETWEEN FRIDAY 18 SEPTEMBER AND SATURDAY 31 OCTOBER. Large numbers of spectators will be travelling to and from the venues, with additional fans heading to Fanzones to enjoy the rugby action live on giant screens. This means that certain parts of the Capital will be much busier than usual before and after each match.",
                "created": "2015-09-14T15:55:00",
                "lastUpdate": "2015-09-14T16:00:00"
            }, {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "Information",
                "type": "stopInfo",
                "categoryDescription": "Information",
                "description": "Liverpool Street Station: Main ticket hall improvements will start to take place from October 2015, when the ticket office in this station closes.  Work will last for up to 12 weeks as we install additional ticket machines.\n\nThe ticket office will not reopen when the work is complete. \n\nTo pay for travel, you can now:\nUse your contactless payment card\nUse the smarter ticket machines\nor\nBuy tickets or top up your Oyster card online or at nearby Oyster Ticket Stops.",
                "created": "2015-10-05T11:04:00",
                "lastUpdate": "2015-10-05T11:07:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        }]
    }, {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2015-10-20T17:03:00",
        "duration": 3,
        "arrivalDateTime": "2015-10-20T17:06:00",
        "legs": [{
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 3,
            "instruction": {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Central line to Liverpool Street",
                "detailed": "Central line towards Ealing Broadway, West Ruislip, Northolt, or North Acton",
                "steps": []
            },
            "obstacles": [],
            "departureTime": "2015-10-20T17:03:00",
            "arrivalTime": "2015-10-20T17:06:00",
            "departurePoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUBLG",
                "platformName": "",
                "icsCode": "1000022",
                "commonName": "Bethnal Green Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.52706146271,
                "lon": -0.054590331250000006
            },
            "arrivalPoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLULVT",
                "platformName": "",
                "icsCode": "1000138",
                "commonName": "Liverpool Street Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.51804675377,
                "lon": -0.08218753614
            },
            "path": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.52706146271, -0.05459033125],[51.52722404509, -0.05680355916],[51.52721609488, -0.05740939514],[51.52673448962, -0.06199990871],[51.52627016277, -0.06601293885],[51.52599644134, -0.06795630868],[51.52574772654, -0.0692354557],[51.52551932062, -0.07011008069],[51.52479951721, -0.07172625575],[51.52385621911, -0.07397167997],[51.52336220584, -0.0751025076],[51.52270571817, -0.0761969125],[51.51804675377, -0.08218753614]]",
                "stopPoints": [{
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULVT",
                    "name": "Liverpool Street Underground Station",
                    "uri": "/StopPoint/940GZZLULVT",
                    "type": "StopPoint"
                }]
            },
            "routeOptions": [{
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Central",
                "directions": ["Ealing Broadway Underground Station", "West Ruislip Underground Station", "Northolt Underground Station", "North Acton Underground Station"],
                "lineIdentifier": {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "central",
                    "name": "Central",
                    "uri": "/Line/central",
                    "type": "Line"
                }
            }],
            "mode": {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "tube",
                "name": "tube",
                "type": "Mode"
            },
            "disruptions": [{
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "stopInfo",
                "categoryDescription": "PlannedWork",
                "description": "RUGBY WORLD CUP, MATCHES IN LONDON BETWEEN FRIDAY 18 SEPTEMBER AND SATURDAY 31 OCTOBER. Large numbers of spectators will be travelling to and from the venues, with additional fans heading to Fanzones to enjoy the rugby action live on giant screens. This means that certain parts of the Capital will be much busier than usual before and after each match.",
                "created": "2015-09-14T15:55:00",
                "lastUpdate": "2015-09-14T16:00:00"
            }, {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "Information",
                "type": "stopInfo",
                "categoryDescription": "Information",
                "description": "Liverpool Street Station: Main ticket hall improvements will start to take place from October 2015, when the ticket office in this station closes.  Work will last for up to 12 weeks as we install additional ticket machines.\n\nThe ticket office will not reopen when the work is complete. \n\nTo pay for travel, you can now:\nUse your contactless payment card\nUse the smarter ticket machines\nor\nBuy tickets or top up your Oyster card online or at nearby Oyster Ticket Stops.",
                "created": "2015-10-05T11:04:00",
                "lastUpdate": "2015-10-05T11:07:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        }]
    }, {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2015-10-20T17:01:00",
        "duration": 31,
        "arrivalDateTime": "2015-10-20T17:32:00",
        "legs": [{
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 31,
            "instruction": {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Walk to Liverpool Street Underground Station",
                "detailed": "Walk to Liverpool Street Underground Station",
                "steps": [{
                    "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                    "description": "Continue along Bethnal Green Road for 1510 metres (22 minutes, 22 seconds).",
                    "turnDirection": "STRAIGHT",
                    "streetName": "Bethnal Green Road",
                    "distance": 1510,
                    "cumulativeDistance": 1510,
                    "skyDirection": 76,
                    "cumulativeTravelTime": 1342,
                    "latitude": -0.05671099831,
                    "longitude": 51.527366393019996,
                    "pathAttribute": {
                        "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                    }
                }, {
                    "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                    "description": "Turn left on to Shoreditch High Street, continue for 254 metres (3 minutes, 46 seconds).",
                    "turnDirection": "LEFT",
                    "streetName": "Shoreditch High Street",
                    "distance": 254,
                    "cumulativeDistance": 1764,
                    "skyDirection": 18,
                    "cumulativeTravelTime": 1568,
                    "latitude": -0.07722466453,
                    "longitude": 51.52363081961,
                    "pathAttribute": {
                        "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                    }
                }, {
                    "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                    "description": "Continue along Norton Folgate for 116 metres (1 minute, 43 seconds).",
                    "turnDirection": "STRAIGHT",
                    "streetName": "Norton Folgate",
                    "distance": 116,
                    "cumulativeDistance": 1880,
                    "skyDirection": 16,
                    "cumulativeTravelTime": 1671,
                    "latitude": -0.07852551495,
                    "longitude": 51.52149392092,
                    "pathAttribute": {
                        "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                    }
                }, {
                    "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                    "description": "Continue along Bishopsgate for 161 metres (2 minutes, 23 seconds).",
                    "turnDirection": "STRAIGHT",
                    "streetName": "Bishopsgate",
                    "distance": 161,
                    "cumulativeDistance": 2041,
                    "skyDirection": 4,
                    "cumulativeTravelTime": 1814,
                    "latitude": -0.078913965580000009,
                    "longitude": 51.52048412366,
                    "pathAttribute": {
                        "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                    }
                }]
            },
            "obstacles": [],
            "departureTime": "2015-10-20T17:01:00",
            "arrivalTime": "2015-10-20T17:32:00",
            "departurePoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUBLG",
                "platformName": "",
                "icsCode": "1000022",
                "commonName": "Bethnal Green Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.52749315516,
                "lon": -0.05676326751
            },
            "arrivalPoint": {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "HUBLST",
                "platformName": "",
                "icsCode": "1000138",
                "commonName": "Liverpool Street Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.51905102149,
                "lon": -0.0792625519
            },
            "path": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.52749315516, -0.05676326751],[51.52736639302, -0.05671099831],[51.52732599629, -0.05698663461],[51.52724615514, -0.05759553164],[51.52723883881, -0.05769675931],[51.52715851698, -0.05827684115],[51.52710419739, -0.05879814867],[51.52705647809, -0.05917500873],[51.52700096292, -0.05962428211],[51.52696930727, -0.0598851254],[51.52693860402, -0.06020359389],[51.52689915185, -0.06053685023],[51.52685261769, -0.06098573875],[51.5267838845, -0.06172389848],[51.52675174809, -0.06195592651],[51.52661920737, -0.06318694937],[51.52655611735, -0.063723033],[51.52645427418, -0.0646355839],[51.52628979802, -0.06611302089],[51.52624395478, -0.06660511695],[51.526033573, -0.0680268179],[51.5257836718, -0.0692339351],[51.52568223791, -0.06962746072],[51.5255477017, -0.07019537697],[51.52552216478, -0.07028295299],[51.52487140785, -0.07172321857],[51.52477611036, -0.07194348172],[51.52455051573, -0.07244314629],[51.52432586558, -0.07300042863],[51.52391061025, -0.07399821591],[51.52375737035, -0.07452363928],[51.52369257305, -0.07495883647],[51.52365118744, -0.07517681357],[51.52363368278, -0.07575416931],[51.52362870524, -0.07654722815],[51.52363081961, -0.07722466453],[51.52324771188, -0.07744261705],[51.52314980634, -0.07750440189],[51.52282936649, -0.07770529536],[51.52272223835, -0.07775305227],[51.52260612382, -0.07780118737],[51.52243679926, -0.07789480802],[51.52216956874, -0.07805021026],[51.52195578415, -0.07817453071],[51.52189358763, -0.07822039392],[51.52149392092, -0.07852551495],[51.52112831127, -0.07871388008],[51.52048412366, -0.07891396558],[51.51997284397, -0.07899313852],[51.51924848593, -0.07923982987],[51.51906095137, -0.07931979007],[51.51905102149, -0.0792625519]]",
                "stopPoints": []
            },
            "routeOptions": [{
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "",
                "directions": [""]
            }],
            "mode": {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "walking",
                "name": "walking",
                "type": "Mode"
            },
            "disruptions": [],
            "plannedWorks": [],
            "distance": 2041.0,
            "isDisrupted": false,
            "hasFixedLocations": true
        }]
    }],
    "lines": [{
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "central",
        "name": "Central",
        "modeName": "tube",
        "created": "2015-10-14T10:31:00.39",
        "modified": "2015-10-14T10:31:00.39",
        "lineStatuses": [{
            "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
            "id": 0,
            "statusSeverity": 10,
            "statusSeverityDescription": "Good Service",
            "created": "0001-01-01T00:00:00",
            "validityPeriods": []
        }],
        "routeSections": [],
        "serviceTypes": [{
            "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
            "name": "Regular",
            "uri": "/Line/Route?ids=Central&serviceTypes=Regular"
        }]
    }],
    "recommendedMaxAgeMinutes": 2,
    "searchCriteria": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria, Tfl.Api.Presentation.Entities",
        "dateTime": "2015-10-20T17:01:00",
        "dateTimeType": "Departing",
        "timeAdjustments": {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments, Tfl.Api.Presentation.Entities",
            "earliest": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20151020",
                "time": "0300",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/bethnal%20green%20underground%20station/to/liverpool%20street%20underground%20station?nationalsearch=false&timeIs=departing&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=0300&date=20151020"
            },
            "earlier": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20151020",
                "time": "1701",
                "timeIs": "arriving",
                "uri": "/journey/journeyresults/bethnal%20green%20underground%20station/to/liverpool%20street%20underground%20station?nationalsearch=false&timeIs=arriving&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=1701&date=20151020"
            },
            "later": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20151020",
                "time": "1703",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/bethnal%20green%20underground%20station/to/liverpool%20street%20underground%20station?nationalsearch=false&timeIs=departing&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=1703&date=20151020"
            },
            "latest": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20151021",
                "time": "0300",
                "timeIs": "arriving",
                "uri": "/journey/journeyresults/bethnal%20green%20underground%20station/to/liverpool%20street%20underground%20station?nationalsearch=false&timeIs=arriving&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=0300&date=20151021"
            }
        }
    },
    "journeyVector": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector, Tfl.Api.Presentation.Entities",
        "from": "Bethnal Green Underground Station",
        "to": "Liverpool Street Underground Station",
        "via": "",
        "uri": "/journey/journeyresults/bethnal%20green%20underground%20station/to/liverpool%20street%20underground%20station?nationalsearch=false&timeis=departing&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false"
    }
}


console.log(JSON.parse(data).journey);