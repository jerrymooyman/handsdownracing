import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { organiseRaceSummaries } from '../utils/raceDataOriganise'

const next_to_go_ids = [
  '3ea76585-f06b-4f37-b400-5e500e7242b3',
  'dd28191a-d915-4d0c-8fd4-402858333210',
  '23c72175-785d-4509-a033-5c80090e3453',
  'e84d10cc-37f5-4942-ba7d-073db03e8936',
  'a820016a-3007-4c13-8fad-952fb928a959',
  'e67a2311-37a3-463d-a60d-848a64b8b5ca',
  'b01a02bc-1432-46a8-9a72-0ec47530f991',
  'f879d3cc-91b3-4556-9530-ae86ef45542f',
  '87a4ff4e-2097-4ff2-973d-cee7be5a3c0f',
  '918a22c5-a8c9-435d-91c1-d25c8debeebc'
]
const race_summaries = {
  '23c72175-785d-4509-a033-5c80090e3453': {
    race_id: '23c72175-785d-4509-a033-5c80090e3453',
    race_name: 'Schweppes Lady Drivers Invitational',
    race_number: 2,
    meeting_id: '7da590bb-efad-435a-b237-2accd33a17fd',
    meeting_name: 'Menangle',
    category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
    advertised_start: { seconds: 1582962600 },
    race_form: {
      distance: 1609,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '2354d5f1-a358-11e7-810d-0a1a4ae29bd2',
        name: 'Fast',
        short_name: 'fast'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        'CATCH A MOMENT (1) Having third run back from a spell. Won by a huge margin two runs back at Bathurst and gets a favourable alley. Big chance here. SUPERBASS (2) Brave effort to win two runs back at this course and tracking very well this campaign. Can feature here. CULTURE KING (3) On a quick turnaround. Won by a big margin three runs back at Goulburn. Could take beating. STRUVE (7) Second up from a spell. Won by a big margin last time at Globe Derby. Could pose a threat and looks promising',
      additional_data:
        '{"gait":"Pace","jump_time":"","classes":["M0"],"min_hcp_weight":"","prizes":[{"type":"total_value","value":"20,400"},{"type":"1st","value":"10400"},{"type":"2nd","value":"3600"},{"type":"3rd","value":"2400"},{"type":"4th","value":"1200"},{"type":"5th","value":"800"}],"restrictions":null,"start_time":"29/02/2020 17:20:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        'CATCH A MOMENT (1) Third up from a break. Gave them a lesson when winning two runs back at Bathurst and will be aiming for a soft run from the draw. Looks a winning hope. SUPERBASS (2) Brave effort to win two runs back at this course and very competitive this preparation. Should be very competitive and is a genuine threat. CULTURE KING (3) Racing for the second time this week. Thrashed the field when winning three runs back at Goulburn. Live winning chance. STRUVE (7) Having second run back from a break. Kicked clear when winning last start at Globe Derby. Should be around the mark'
    }
  },
  '3ea76585-f06b-4f37-b400-5e500e7242b3': {
    race_id: '3ea76585-f06b-4f37-b400-5e500e7242b3',
    race_name: 'Hcp (C4)',
    race_number: 6,
    meeting_id: 'b0bf0932-ab61-4f58-b6be-8a1bee5a904e',
    meeting_name: 'Singapore',
    category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
    advertised_start: { seconds: 1582962300 },
    race_form: {
      distance: 1200,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'b3df9f04-2b25-11e9-8745-066fe85581de',
        name: 'Overcast',
        short_name: 'overcast',
        icon_uri: 'Overcast'
      },
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["Class 4"],"min_hcp_weight":"50","prizes":[{"type":"1st","value":"26775"},{"type":"2nd","value":"9562"},{"type":"3rd","value":"4838"},{"type":"4th","value":"2250"},{"type":"5th","value":"900"},{"type":"6th","value":"450"},{"type":"total_value","value":"50000"}],"restrictions":{"jockey":"Apprentices Can Claim"},"start_time":"29/02/2020 17:15:00 PM","weight_type":"Handicap","nomination_number":"6"}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        'MR MALEK (2) Second up. Bold effort to win last start at the track but going up in weight here. Has the ability to take this out. COUNT ME IN (6) First run back from a break. Left nothing to chance when winning last run at this course but carrying more weight than last time. Must respect in this event. SUPER SMART (1) Having second run back from a spell. Fair result placing 2nd last time at this track. Exotics hope in this event. TRAPIO (3) Second up from a spell. Did its best work late when 3rd last time at the track. Can make a claim in this race and is a strong each way hope'
    }
  },
  '87a4ff4e-2097-4ff2-973d-cee7be5a3c0f': {
    race_id: '87a4ff4e-2097-4ff2-973d-cee7be5a3c0f',
    race_name: 'Garrards Horse \u0026 Hound Band 5 Pace',
    race_number: 2,
    meeting_id: '4f7a463c-b094-4302-bc89-9864e5b3f1b0',
    meeting_name: 'Albion Park',
    category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
    advertised_start: { seconds: 1582963320 },
    race_form: {
      distance: 1660,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        "THREE MUGS IN (1) On a short back up. Finished on top three runs back here and will appreciate a good draw. Will go well here. CARDLESFROMHEAVEN (2) On a quick back up. Was all too good winning three runs back at this course. Can't knock. BIG BANG LEONARD (9) Racing for the second time this week. Was first to greet the judge when winning three runs back at this track but will be facing a significant drop in distance today. Among the major players. IM MAJOR HARRY (3) On a short back up. Ran 3rd last start at the track but returns to a shorter trip here. Could sneak a place",
      additional_data:
        '{"gait":"Pace","jump_time":"","classes":["BAND 5"],"min_hcp_weight":"","prizes":[{"type":"total_value","value":"12,960"},{"type":"1st","value":"7570"},{"type":"2nd","value":"2204"},{"type":"3rd","value":"1130"},{"type":"4th","value":"773"},{"type":"5th","value":"534"}],"restrictions":null,"start_time":"29/02/2020 17:32:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        "THREE MUGS IN (1) On a quick back up. Landed the spoils when winning three runs back at the track and will appreciate a good gate. Will go well here. CARDLESFROMHEAVEN (2) Racing for the second time this week. Solid win three runs back around here. Respect against this field. BIG BANG LEONARD (9) On a short back up. Solid effort when winning three runs back at this track but coming back in distance here. Major player. IM MAJOR HARRY (3) Backs up quickly today. Ran 3rd last run at this course but coming back in distance here. Place wouldn't shock"
    }
  },
  '918a22c5-a8c9-435d-91c1-d25c8debeebc': {
    race_id: '918a22c5-a8c9-435d-91c1-d25c8debeebc',
    race_name: 'Brothers Old Boys Ipswich',
    race_number: 4,
    meeting_id: '4e1aa66c-788e-46d7-8f1d-c25aa158760a',
    meeting_name: 'Ipswich',
    category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
    advertised_start: { seconds: 1582963440 },
    race_form: {
      distance: 431,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        "RECREATIONAL (6) Game effort to win three runs back at Albion Park and shows good early pace. A win looks likely. YOGI'S MY DAD (8) Bold effort to win last start at Bundaberg. Displays good tactical speed. Key player. HAIGSLEA FLYER (4) Solid win two runs back at the track and proven performer at this distance in the past. Will be pushing for a forward position early. Could run into the placings. BIG POM (1) Competitive effort when 3rd last start at this venue. Minor prospects",
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["GRADE 5"],"min_hcp_weight":"","prizes":[{"type":"1st","value":"1750"},{"type":"2nd","value":"500"},{"type":"3rd","value":"250"},{"type":"total_value","value":"2500"}],"restrictions":null,"start_time":"29/02/2020 17:34:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        "RECREATIONAL (6) Fought on well to win three runs back at Albion Park and won't be far away during the run. Has plenty of claims. YOGI'S MY DAD (8) Bold effort to win last start at Bundaberg. Should race on the speed. Major player. HAIGSLEA FLYER (4) Displayed potential when winning two runs back at this track and will be well suited at the trip. Displays good tactical speed. Has scope so do not ignore. BIG POM (1) Did well when 3rd last run at the track. Each way hope"
    }
  },
  'a820016a-3007-4c13-8fad-952fb928a959': {
    race_id: 'a820016a-3007-4c13-8fad-952fb928a959',
    race_name: 'Awesome Project Maiden',
    race_number: 5,
    meeting_id: 'b2d0101c-14c5-4923-85b6-dd0ce22016e4',
    meeting_name: 'The Gardens',
    category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
    advertised_start: { seconds: 1582962840 },
    race_form: {
      distance: 400,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        'FAB NIKKI (5) On a quick turnaround. Nice run when 3rd last time at Gunnedah. Strongly consider. TRALEE ACE (8) Ran 2nd last start at Gunnedah and will be positive in the run early. Among the major players. MANTON BLAZE (6) Looked promising when 4th last time at Goulburn and change in trainer to David Sanderson. Winning chance in what appears a suitable race. CANDY MOON (3) Should land a nice spot just off the speed. Dashed home into 3rd three runs back at the track. Will be competitive',
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["MAIDEN"],"min_hcp_weight":"","prizes":[{"type":"1st","value":"900"},{"type":"2nd","value":"260"},{"type":"3rd","value":"190"},{"type":"total_value","value":"1350"}],"restrictions":null,"start_time":"29/02/2020 17:24:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        "FAB NIKKI (5) On a quick back up. Placed 3rd last time at Gunnedah. Don't overlook. TRALEE ACE (8) Finished 2nd last start at Gunnedah and should be going forward early. Can get the job done. MANTON BLAZE (6) Came on strongly to finish 4th last time at Goulburn and change in trainer to David Sanderson. Must be considered. CANDY MOON (3) Expecting to settle just off the pace. Displayed good finishing speed when 3rd three runs back around here. Must respect"
    }
  },
  'b01a02bc-1432-46a8-9a72-0ec47530f991': {
    race_id: 'b01a02bc-1432-46a8-9a72-0ec47530f991',
    race_name: '#Getrealsupportteal Pace (Sky 2)',
    race_number: 2,
    meeting_id: '0fa29e98-f8fd-46a7-86eb-6c16ee9b1cd5',
    meeting_name: 'Globe Derby',
    category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
    advertised_start: { seconds: 1582963080 },
    race_form: {
      distance: 2230,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        'LOMA JACCKA (3) Scored a victory three runs back at this venue. Honest enough customer who is strongly placed. BETTING MAN (11) On a short back up. Solid win two runs back at this venue. Deserves consideration. FINE ARTIST (7) Comprehensive victory when winning three runs back at Port Pirie. Hard to overlook. SMOOTH DELIGHT (10) Backing up quickly here. Nice effort when winning last time at this track. Possesses the talent and has some chance',
      additional_data:
        '{"gait":"Pace","jump_time":"","classes":["M0"],"min_hcp_weight":"","prizes":[{"type":"total_value","value":"7,000"},{"type":"1st","value":"4192"},{"type":"2nd","value":"950"},{"type":"3rd","value":"590"},{"type":"4th","value":"197"},{"type":"5th","value":"131"}],"restrictions":null,"start_time":"29/02/2020 17:28:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        "LOMA JACCKA (3) Left nothing to chance when winning three runs back around here. Hard to overlook. BETTING MAN (11) Racing for the second time this week. Bold effort to win two runs back at this venue. Should take beating. FINE ARTIST (7) Thrashed the field when winning three runs back at Port Pirie. Big chance. SMOOTH DELIGHT (10) On a quick back up. Solid win last time at this track. Don't overlook as is capable of a big run"
    }
  },
  'dd28191a-d915-4d0c-8fd4-402858333210': {
    race_id: 'dd28191a-d915-4d0c-8fd4-402858333210',
    race_name: 'Tab.Com.Au',
    race_number: 2,
    meeting_id: '3ae4202f-75dd-4d1d-b25f-8c23cf63b4f7',
    meeting_name: 'The Meadows',
    category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
    advertised_start: { seconds: 1582962480 },
    race_form: {
      distance: 525,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        "JUNK FOOD JUNKIE (6) Displayed potential when winning last time at Sandown Park. Should jump out and bowl along. The one to beat. RUN LIKE JESS (9) Got the prize when winning last start at Horsham. Won't be far away during the run. Better claims. ROCKSTAR QUINN (1) Likely to get a nice run behind the speed and backing up quickly here. Placed 2nd three runs back at Sandown Park. Don't disregard. YAKIMA (3) Was first to greet the judge when winning three runs back at Shepparton. Can figure in the finish",
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["MIXED 6/7"],"min_hcp_weight":"","prizes":[{"type":"1st","value":"5280"},{"type":"2nd","value":"1510"},{"type":"3rd","value":"760"},{"type":"total_value","value":"7550"}],"restrictions":null,"start_time":"29/02/2020 17:18:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        "JUNK FOOD JUNKIE (6) Did enough to win last run at Sandown Park. Should race on the speed. Don't overlook. ROCKSTAR QUINN (1) Racing for the second time this week. Competitive effort when 2nd three runs back at Sandown Park and should race just behind the speed. Should be competitive in this race at a bit of odds. YAKIMA (3) Solid win three runs back at Shepparton. Each way prospects. ROCKSTAR GARETH (4) On a quick turnaround. Won last run here. Serious player."
    }
  },
  'e67a2311-37a3-463d-a60d-848a64b8b5ca': {
    race_id: 'e67a2311-37a3-463d-a60d-848a64b8b5ca',
    race_name: 'Rotary Ride The Range Hcp (C1)',
    race_number: 3,
    meeting_id: 'c890100b-7e77-42ea-9074-7edf3d9539b9',
    meeting_name: 'Toowoomba',
    category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
    advertised_start: { seconds: 1582962900 },
    race_form: {
      distance: 1000,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '348692da-a340-11e7-810d-0a1a4ae29bd2',
        name: 'Good4',
        short_name: 'good4'
      },
      weather: {
        id: 'b3df9f04-2b25-11e9-8745-066fe85581de',
        name: 'Overcast',
        short_name: 'overcast',
        icon_uri: 'Overcast'
      },
      race_comment:
        "THE TYLER finished sixth last start at Toowoomba when fresh and carrying less weight, genuine contender. HAPPY BUBBLES finished midfield last start at Sunshine Coast on a heavy track when resuming and ran seventh at Gold Coast when last second-up, don't treat lightly. APIDAE first-up after 24 week break. Comes to hand quickly and won at Toowoomba when last first-up, the real danger in the race. DUKATTI let-up for six weeks and placed when fresh, each-way claims.",
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["Class 1"],"min_hcp_weight":"54","prizes":[{"type":"1st","value":"10500"},{"type":"2nd","value":"3300"},{"type":"3rd","value":"1700"},{"type":"4th","value":"900"},{"type":"5th","value":"600"},{"type":"6th","value":"400"},{"type":"7th","value":"400"},{"type":"8th","value":"400"},{"type":"9th","value":"400"},{"type":"10th","value":"400"},{"type":"total_value","value":"19000"}],"restrictions":{"jockey":"Apprentices Can Claim","sex":"Colts, Horses \\u0026 Geldings"},"start_time":"29/02/2020 17:25:00 PM","weight_type":"Handicap","nomination_number":"4"}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        'CHEVYS DESIRE (11) Started $31 and ended up 5.2l from the winner at Kilcoy last time on a soft surface. Respect in this company. THE TYLER (5) Second up from a break. Displayed potential when winning two runs back at Dalby. Can give this a shake. APIDAE (1) First up today. Winner two runs back around here and now racing for a new trainer Peter Kings. Major hope. SOARING ARROW (3) Expecting to settle just off the pace but resuming after a spell. Really dug deep when winning three runs back at the track. Strong claims'
    }
  },
  'e84d10cc-37f5-4942-ba7d-073db03e8936': {
    race_id: 'e84d10cc-37f5-4942-ba7d-073db03e8936',
    race_name: 'Chasers Function Centre',
    race_number: 3,
    meeting_id: '487d074b-2839-4790-9904-f6540c780d4b',
    meeting_name: 'Bendigo',
    category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
    advertised_start: { seconds: 1582962660 },
    race_form: {
      distance: 425,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        'COME ON CHARLIZE (8) Having second run back from a break. Nice effort when winning last run at the track and has a positive draw. No surprise to see a forward showing and one of the main hopes in this race. ASTON SHADOW (2) Should get a lovely cart into it from just behind the pace and change in trainer to Nathan Rooney. Nice effort when winning two runs back at Goulburn. Open to improvement and has a show in this field. KRYPTON GIRL (6) Flew home into 2nd last run here. Suitably placed in this race. FLYING JAMAICA (1) Honest race when 3rd last start here and will appreciate a good draw. Expecting to settle positively. Better claims',
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["GRADE 5"],"min_hcp_weight":"","prizes":[{"type":"1st","value":"1405"},{"type":"2nd","value":"400"},{"type":"3rd","value":"200"},{"type":"total_value","value":"2005"}],"restrictions":null,"start_time":"29/02/2020 17:21:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        'COME ON CHARLIZE (8) Second up. Left nothing to chance when winning last time at this track and drawn nicely. Key player. ASTON SHADOW (2) Gets a nice run behind the speed and change in trainer to Nathan Rooney. Fought on well to win two runs back at Goulburn. Winnable race. KRYPTON GIRL (6) Good run when placing 2nd last start at this track. Respect. FLYING JAMAICA (1) Ran 3rd last run at this course and will be aiming for a soft run from the draw. Should come to hand quickly. Can go on with it'
    }
  },
  'f879d3cc-91b3-4556-9530-ae86ef45542f': {
    race_id: 'f879d3cc-91b3-4556-9530-ae86ef45542f',
    race_name: 'Sydney Kings Finals Bound Stakes',
    race_number: 2,
    meeting_id: '21924113-03a5-4b81-8f45-844bef0cd46b',
    meeting_name: 'Wentworth Park',
    category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
    advertised_start: { seconds: 1582963140 },
    race_form: {
      distance: 520,
      distance_type: {
        id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
        name: 'Metres',
        short_name: 'm'
      },
      distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      track_condition: {
        id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
        name: 'Good',
        short_name: 'good'
      },
      weather: {
        id: 'c509bf7e-3b79-11e8-a5eb-06a5c6d9a756',
        name: 'Fine',
        short_name: 'fine',
        icon_uri: 'Fine'
      },
      race_comment:
        "WHERE'S ELLA (3) Tidy effort when 2nd two runs back at Dapto and ideal trip as proven previously. Expecting to settle positively. Should be in the finish. SEASIDE SHUFFLE (8) Fought on well to win three runs back at Richmond. Won't be far away during the run. Looks a value runner. MAKING A MEMORY (1) Did well when 3rd two runs back at Richmond. Should be going forward early. Winning chance in this line up. TOO EASY PUNK (7) Dashed home into 2nd two runs back here. Can feature here",
      additional_data:
        '{"gait":"Gallop","jump_time":"","classes":["GRADE 5"],"min_hcp_weight":"","prizes":[{"type":"1st","value":"5000"},{"type":"2nd","value":"1500"},{"type":"3rd","value":"1100"},{"type":"total_value","value":"7600"}],"restrictions":null,"start_time":"29/02/2020 17:29:00 PM","weight_type":"","nomination_number":""}',
      generated: 1,
      silk_base_url: 'drr38safykj6s.cloudfront.net',
      race_comment_alternative:
        "WHERE'S ELLA (3) Came in 2nd two runs back at Dapto and strong performer at the trip. Likely to be well placed early. The one they all have to beat. SEASIDE SHUFFLE (8) Solid win three runs back at Richmond. Has good tactical speed and will be nicely positioned. Each way. TOO EASY PUNK (7) Charged home into 2nd two runs back at this course. Warrants a bet. LOBO VELOZ (6) Finished 3rd two runs back at Richmond. Should jump out and bowl along. Genuine threat."
    }
  }
}

const initState = {
  nextRaces: [],
  raceSummaries: [],
}

export const getStore = () => createStore(reducers, applyMiddleware(thunk))
