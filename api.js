{
  "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult, Tfl.Api.Presentation.Entities",
  "journeys": [{
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
    "startDateTime": "2015-10-21T16:27:00",
    "duration": 7,
    "arrivalDateTime": "2015-10-21T16:34:00",
    "legs": [{
      "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
      "duration": 7,
      "instruction": {
        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
        "summary": "Central line to Mile End",
        "detailed": "Central line towards Epping, Hainault, Debden, or Newbury Park",
        "steps": []
      },
      "obstacles": [],
      "departureTime": "2015-10-21T16:27:00",
      "arrivalTime": "2015-10-21T16:34:00",
      "departurePoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUBNK",
        "platformName": "",
        "icsCode": "1000013",
        "commonName": "Bank Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.513524376570004,
        "lon": -0.08830091012
      },
      "arrivalPoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUMED",
        "platformName": "",
        "icsCode": "1000146",
        "commonName": "Mile End Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.52536015878,
        "lon": -0.033456845500000006
      },
      "path": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
        "lineString": "[[51.51352437657, -0.08830091012],[51.51382105535, -0.08719315306],[51.51394028774, -0.08678461229],[51.51405147221, -0.08643405621],[51.51419078998, -0.08615438133],[51.51479698368, -0.08527862741],[51.5152350162, -0.08456844551],[51.5163321551, -0.08347026046],[51.51671503994, -0.08323798944],[51.51747323427, -0.08286023442],[51.51773905908, -0.08261845484],[51.51802050112, -0.0822318799],[51.51809973006, -0.08212765602],[51.51809973006, -0.08212765602],[51.52270571817, -0.0761969125],[51.52336220584, -0.0751025076],[51.52385621911, -0.07397167997],[51.52479951721, -0.07172625575],[51.52551932062, -0.07011008069],[51.52574772654, -0.0692354557],[51.52599644134, -0.06795630868],[51.52627016277, -0.06601293885],[51.52673448962, -0.06199990871],[51.52721609488, -0.05740939514],[51.52722404509, -0.05680355916],[51.52706146271, -0.05459033125],[51.52706146271, -0.05459033125],[51.52684098795, -0.0516010981],[51.52665421275, -0.05064317026],[51.52642704959, -0.04996088707],[51.52615782635, -0.04945340374],[51.52434762462, -0.04658995698],[51.52392812826, -0.04569972812],[51.5235970464, -0.04471923523],[51.52324029507, -0.04327856449],[51.52313793475, -0.04253335456],[51.52314349049, -0.04125015026],[51.52327572026, -0.04055253704],[51.52366428765, -0.039051058],[51.52417623134, -0.03740009151],[51.52470003223, -0.03592156739],[51.52493789165, -0.03508962381],[51.52536015878, -0.0334568455]]",
        "stopPoints": [{
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLULVT",
          "name": "Liverpool Street Underground Station",
          "uri": "/StopPoint/940GZZLULVT",
          "type": "StopPoint"
        }, {
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLUBLG",
          "name": "Bethnal Green Underground Station",
          "uri": "/StopPoint/940GZZLUBLG",
          "type": "StopPoint"
        }, {
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLUMED",
          "name": "Mile End Underground Station",
          "uri": "/StopPoint/940GZZLUMED",
          "type": "StopPoint"
        }]
      },
      "routeOptions": [{
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
        "name": "Central",
        "directions": ["Epping Underground Station", "Hainault Underground Station", "Debden Underground Station", "Newbury Park Underground Station"],
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
      "disruptions": [],
      "plannedWorks": [],
      "isDisrupted": false,
      "hasFixedLocations": true
    }]
  }, {
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
    "startDateTime": "2015-10-21T16:30:00",
    "duration": 7,
    "arrivalDateTime": "2015-10-21T16:37:00",
    "legs": [{
      "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
      "duration": 7,
      "instruction": {
        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
        "summary": "Central line to Mile End",
        "detailed": "Central line towards Hainault, Epping, Loughton, or Newbury Park",
        "steps": []
      },
      "obstacles": [],
      "departureTime": "2015-10-21T16:30:00",
      "arrivalTime": "2015-10-21T16:37:00",
      "departurePoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUBNK",
        "platformName": "",
        "icsCode": "1000013",
        "commonName": "Bank Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.513524376570004,
        "lon": -0.08830091012
      },
      "arrivalPoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUMED",
        "platformName": "",
        "icsCode": "1000146",
        "commonName": "Mile End Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.52536015878,
        "lon": -0.033456845500000006
      },
      "path": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
        "lineString": "[[51.51352437657, -0.08830091012],[51.51382105535, -0.08719315306],[51.51394028774, -0.08678461229],[51.51405147221, -0.08643405621],[51.51419078998, -0.08615438133],[51.51479698368, -0.08527862741],[51.5152350162, -0.08456844551],[51.5163321551, -0.08347026046],[51.51671503994, -0.08323798944],[51.51747323427, -0.08286023442],[51.51773905908, -0.08261845484],[51.51802050112, -0.0822318799],[51.51809973006, -0.08212765602],[51.51809973006, -0.08212765602],[51.52270571817, -0.0761969125],[51.52336220584, -0.0751025076],[51.52385621911, -0.07397167997],[51.52479951721, -0.07172625575],[51.52551932062, -0.07011008069],[51.52574772654, -0.0692354557],[51.52599644134, -0.06795630868],[51.52627016277, -0.06601293885],[51.52673448962, -0.06199990871],[51.52721609488, -0.05740939514],[51.52722404509, -0.05680355916],[51.52706146271, -0.05459033125],[51.52706146271, -0.05459033125],[51.52684098795, -0.0516010981],[51.52665421275, -0.05064317026],[51.52642704959, -0.04996088707],[51.52615782635, -0.04945340374],[51.52434762462, -0.04658995698],[51.52392812826, -0.04569972812],[51.5235970464, -0.04471923523],[51.52324029507, -0.04327856449],[51.52313793475, -0.04253335456],[51.52314349049, -0.04125015026],[51.52327572026, -0.04055253704],[51.52366428765, -0.039051058],[51.52417623134, -0.03740009151],[51.52470003223, -0.03592156739],[51.52493789165, -0.03508962381],[51.52536015878, -0.0334568455]]",
        "stopPoints": [{
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLULVT",
          "name": "Liverpool Street Underground Station",
          "uri": "/StopPoint/940GZZLULVT",
          "type": "StopPoint"
        }, {
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLUBLG",
          "name": "Bethnal Green Underground Station",
          "uri": "/StopPoint/940GZZLUBLG",
          "type": "StopPoint"
        }, {
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLUMED",
          "name": "Mile End Underground Station",
          "uri": "/StopPoint/940GZZLUMED",
          "type": "StopPoint"
        }]
      },
      "routeOptions": [{
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
        "name": "Central",
        "directions": ["Hainault Underground Station", "Epping Underground Station", "Loughton Underground Station", "Newbury Park Underground Station"],
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
      "disruptions": [],
      "plannedWorks": [],
      "isDisrupted": false,
      "hasFixedLocations": true
    }]
  }, {
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
    "startDateTime": "2015-10-21T16:32:00",
    "duration": 7,
    "arrivalDateTime": "2015-10-21T16:39:00",
    "legs": [{
      "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
      "duration": 7,
      "instruction": {
        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
        "summary": "Central line to Mile End",
        "detailed": "Central line towards Epping, Hainault, Loughton, or Newbury Park",
        "steps": []
      },
      "obstacles": [],
      "departureTime": "2015-10-21T16:32:00",
      "arrivalTime": "2015-10-21T16:39:00",
      "departurePoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUBNK",
        "platformName": "",
        "icsCode": "1000013",
        "commonName": "Bank Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.513524376570004,
        "lon": -0.08830091012
      },
      "arrivalPoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUMED",
        "platformName": "",
        "icsCode": "1000146",
        "commonName": "Mile End Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.52536015878,
        "lon": -0.033456845500000006
      },
      "path": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
        "lineString": "[[51.51352437657, -0.08830091012],[51.51382105535, -0.08719315306],[51.51394028774, -0.08678461229],[51.51405147221, -0.08643405621],[51.51419078998, -0.08615438133],[51.51479698368, -0.08527862741],[51.5152350162, -0.08456844551],[51.5163321551, -0.08347026046],[51.51671503994, -0.08323798944],[51.51747323427, -0.08286023442],[51.51773905908, -0.08261845484],[51.51802050112, -0.0822318799],[51.51809973006, -0.08212765602],[51.51809973006, -0.08212765602],[51.52270571817, -0.0761969125],[51.52336220584, -0.0751025076],[51.52385621911, -0.07397167997],[51.52479951721, -0.07172625575],[51.52551932062, -0.07011008069],[51.52574772654, -0.0692354557],[51.52599644134, -0.06795630868],[51.52627016277, -0.06601293885],[51.52673448962, -0.06199990871],[51.52721609488, -0.05740939514],[51.52722404509, -0.05680355916],[51.52706146271, -0.05459033125],[51.52706146271, -0.05459033125],[51.52684098795, -0.0516010981],[51.52665421275, -0.05064317026],[51.52642704959, -0.04996088707],[51.52615782635, -0.04945340374],[51.52434762462, -0.04658995698],[51.52392812826, -0.04569972812],[51.5235970464, -0.04471923523],[51.52324029507, -0.04327856449],[51.52313793475, -0.04253335456],[51.52314349049, -0.04125015026],[51.52327572026, -0.04055253704],[51.52366428765, -0.039051058],[51.52417623134, -0.03740009151],[51.52470003223, -0.03592156739],[51.52493789165, -0.03508962381],[51.52536015878, -0.0334568455]]",
        "stopPoints": [{
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLULVT",
          "name": "Liverpool Street Underground Station",
          "uri": "/StopPoint/940GZZLULVT",
          "type": "StopPoint"
        }, {
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLUBLG",
          "name": "Bethnal Green Underground Station",
          "uri": "/StopPoint/940GZZLUBLG",
          "type": "StopPoint"
        }, {
          "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
          "id": "940GZZLUMED",
          "name": "Mile End Underground Station",
          "uri": "/StopPoint/940GZZLUMED",
          "type": "StopPoint"
        }]
      },
      "routeOptions": [{
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
        "name": "Central",
        "directions": ["Epping Underground Station", "Hainault Underground Station", "Loughton Underground Station", "Newbury Park Underground Station"],
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
      "disruptions": [],
      "plannedWorks": [],
      "isDisrupted": false,
      "hasFixedLocations": true
    }]
  }, {
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
    "startDateTime": "2015-10-21T16:30:00",
    "duration": 60,
    "arrivalDateTime": "2015-10-21T17:30:00",
    "legs": [{
      "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
      "duration": 60,
      "instruction": {
        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
        "summary": "Walk to Mile End Underground Station",
        "detailed": "Walk to Mile End Underground Station",
        "steps": [{
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Continue along Cornhill for 327 metres (4 minutes, 14 seconds).",
          "turnDirection": "STRAIGHT",
          "streetName": "Cornhill",
          "distance": 327,
          "cumulativeDistance": 327,
          "skyDirection": 273,
          "cumulativeTravelTime": 254,
          "latitude": -0.08882616669,
          "longitude": 51.5133710706,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }, {
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Continue along Leadenhall Street for 447 metres (6 minutes, 36 seconds).",
          "turnDirection": "STRAIGHT",
          "streetName": "Leadenhall Street",
          "distance": 447,
          "cumulativeDistance": 774,
          "skyDirection": 266,
          "cumulativeTravelTime": 650,
          "latitude": -0.08411246143,
          "longitude": 51.51339308417,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }, {
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Continue along Aldgate for 297 metres (4 minutes, 23 seconds).",
          "turnDirection": "STRAIGHT",
          "streetName": "Aldgate",
          "distance": 297,
          "cumulativeDistance": 1071,
          "skyDirection": 266,
          "cumulativeTravelTime": 913,
          "latitude": -0.07770458499,
          "longitude": 51.51326125701,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }, {
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Continue along Whitechapel High Street for 347 metres (5 minutes, 3 seconds).",
          "turnDirection": "STRAIGHT",
          "streetName": "Whitechapel High Street",
          "distance": 347,
          "cumulativeDistance": 1418,
          "skyDirection": 229,
          "cumulativeTravelTime": 1216,
          "latitude": -0.073906187290000008,
          "longitude": 51.51447588677,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }, {
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Continue along Whitechapel Road for 1020 metres (15 minutes, 2 seconds).",
          "turnDirection": "STRAIGHT",
          "streetName": "Whitechapel Road",
          "distance": 1020,
          "cumulativeDistance": 2438,
          "skyDirection": 229,
          "cumulativeTravelTime": 2118,
          "latitude": -0.06965878537,
          "longitude": 51.51607867924,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }, {
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Continue along Mile End Road for 1599 metres (23 minutes, 40 seconds).",
          "turnDirection": "STRAIGHT",
          "streetName": "Mile End Road",
          "distance": 1599,
          "cumulativeDistance": 4037,
          "skyDirection": 249,
          "cumulativeTravelTime": 3538,
          "latitude": -0.0563837758,
          "longitude": 51.51981618757,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }, {
          "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
          "description": "Turn right, continue for 74 metres (1 minute, 4 seconds).",
          "turnDirection": "RIGHT",
          "streetName": "",
          "distance": 74,
          "cumulativeDistance": 4111,
          "skyDirection": 325,
          "cumulativeTravelTime": 3602,
          "latitude": -0.03506313392,
          "longitude": 51.524883492200004,
          "pathAttribute": {
            "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
          }
        }]
      },
      "obstacles": [],
      "departureTime": "2015-10-21T16:30:00",
      "arrivalTime": "2015-10-21T17:30:00",
      "departurePoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "HUBBAN",
        "platformName": "",
        "icsCode": "1000013",
        "commonName": "Bank Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.513389043480004,
        "lon": -0.08882541444
      },
      "arrivalPoint": {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUMED",
        "platformName": "",
        "icsCode": "1000146",
        "commonName": "Mile End Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [],
        "lat": 51.52432471819,
        "lon": -0.034452897040000006
      },
      "path": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
        "lineString": "[[51.51338904348, -0.08882541444],[51.5133710706, -0.08882616669],[51.51333049651, -0.08799195965],[51.51333079455, -0.08745869721],[51.51333156, -0.08695423947],[51.5133597525, -0.08647745664],[51.51335881259, -0.08641984734],[51.51336356905, -0.08616022887],[51.51337067531, -0.08604463361],[51.51336832494, -0.08590061036],[51.5133818316, -0.08562621274],[51.51339181071, -0.08513578008],[51.51340437487, -0.08480377284],[51.5134084221, -0.08450094706],[51.51339308417, -0.08411246143],[51.51341679362, -0.08336203244],[51.51347075361, -0.08281210335],[51.51349731707, -0.08168683455],[51.51352949342, -0.081454887],[51.51344016363, -0.08039213691],[51.51336759281, -0.0798042881],[51.51333568158, -0.07950297431],[51.51332362924, -0.07931612295],[51.51326125701, -0.07770458499],[51.51326717457, -0.07751697779],[51.51351573732, -0.07677148835],[51.51359283577, -0.07653764477],[51.51372929477, -0.0760851149],[51.51378108665, -0.07595322173],[51.51382389201, -0.07582170696],[51.51390122485, -0.07560226264],[51.51405588926, -0.07516337178],[51.51417626146, -0.07482681102],[51.51426257875, -0.07460698442],[51.5144160569, -0.07409607401],[51.51447588677, -0.07390618729],[51.51452814922, -0.07380309471],[51.51458845172, -0.07364201235],[51.51465703062, -0.07343734254],[51.51494198565, -0.07271909681],[51.51502120607, -0.07261486381],[51.51520116091, -0.07207399449],[51.51525034364, -0.0717836618],[51.51533570784, -0.07150621308],[51.51553363015, -0.07096457642],[51.51562774179, -0.07067234185],[51.51573368241, -0.07055256156],[51.51584623962, -0.07028837119],[51.51601980447, -0.0699062963],[51.51607867924, -0.06965878537],[51.51613093784, -0.06955568436],[51.51614819932, -0.06951171526],[51.51618319636, -0.06945258311],[51.51669560401, -0.06834992175],[51.51686939962, -0.06798223574],[51.51718080468, -0.06723397367],[51.51725812108, -0.06701449894],[51.51736120897, -0.06672186482],[51.51770380055, -0.06568399305],[51.51787378596, -0.06508583177],[51.51817071804, -0.06400663073],[51.51841396015, -0.06294410733],[51.51844681273, -0.06275533368],[51.51871652614, -0.06166284522],[51.51875860097, -0.06148809169],[51.51883376356, -0.06113896531],[51.51891743508, -0.06076064836],[51.51917623703, -0.05955328776],[51.51925163213, -0.05921855909],[51.51950238569, -0.05806917964],[51.51952695957, -0.05792399256],[51.51959407932, -0.05763285323],[51.5197434257, -0.05687695806],[51.51980107922, -0.05655739023],[51.51981618757, -0.0563837758],[51.51994143234, -0.05580187099],[51.52008178054, -0.05504634722],[51.52027269582, -0.05408686158],[51.52038846471, -0.05347651956],[51.52044586978, -0.05314253887],[51.52062802228, -0.05219782575],[51.52072748371, -0.05168907201],[51.52089428507, -0.05090356339],[51.52106886998, -0.05004564305],[51.52111871601, -0.049798464],[51.52117730818, -0.04953649598],[51.52129449076, -0.04901255796],[51.52156826559, -0.04763144712],[51.52170928014, -0.04691908646],[51.52185053027, -0.04622112616],[51.52196697781, -0.04565395818],[51.5221879964, -0.04434714165],[51.52227805272, -0.04327656801],[51.52246382128, -0.04201448808],[51.52248837509, -0.04186928343],[51.52267236052, -0.04103972429],[51.52297051248, -0.04004668829],[51.52352956952, -0.03852347308],[51.52405187144, -0.0374919327],[51.52410386008, -0.03737437207],[51.52419010577, -0.03715442822],[51.5242593431, -0.0369928779],[51.52431084902, -0.03684650546],[51.524603838, -0.03608428086],[51.5247066061, -0.03577712596],[51.52473965568, -0.03560271327],[51.5248834922, -0.03506313392],[51.52457217139, -0.034730557],[51.52438906947, -0.03453662037],[51.52431693903, -0.03452531071],[51.52432471819, -0.03445289704]]",
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
      "distance": 4111.0,
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
    "dateTime": "2015-10-21T16:30:00",
    "dateTimeType": "Departing",
    "timeAdjustments": {
      "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments, Tfl.Api.Presentation.Entities",
      "earliest": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
        "date": "20151021",
        "time": "0300",
        "timeIs": "departing",
        "uri": "/journey/journeyresults/bank%20underground%20station/to/mile%20end%20underground%20station?nationalsearch=false&timeIs=departing&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=0300&date=20151021"
      },
      "earlier": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
        "date": "20151021",
        "time": "1634",
        "timeIs": "arriving",
        "uri": "/journey/journeyresults/bank%20underground%20station/to/mile%20end%20underground%20station?nationalsearch=false&timeIs=arriving&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=1634&date=20151021"
      },
      "later": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
        "date": "20151021",
        "time": "1632",
        "timeIs": "departing",
        "uri": "/journey/journeyresults/bank%20underground%20station/to/mile%20end%20underground%20station?nationalsearch=false&timeIs=departing&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=1632&date=20151021"
      },
      "latest": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
        "date": "20151022",
        "time": "0300",
        "timeIs": "arriving",
        "uri": "/journey/journeyresults/bank%20underground%20station/to/mile%20end%20underground%20station?nationalsearch=false&timeIs=arriving&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false&time=0300&date=20151022"
      }
    }
  },
  "journeyVector": {
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector, Tfl.Api.Presentation.Entities",
    "from": "bank Underground Station",
    "to": "mile end Underground Station",
    "via": "",
    "uri": "/journey/journeyresults/bank%20underground%20station/to/mile%20end%20underground%20station?nationalsearch=false&timeis=departing&mode=tube&alternativecycle=false&alternativewalking=true&applyhtmlmarkup=false&usemultimodalcall=false"
  }
}
