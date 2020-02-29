export type Race = {
  race_id: String
  race_name: String
  race_number: Number
  meeting_id: String
  meeting_name: String
  category_id: String
  advertised_start: {
      seconds: Number
  }
    //race_form: {
    //distance: Number;
    //distance_type: {
    //id: String;
    //name: String;
    //short_name: String;
    //};
    //distance_type_id: String;
    //track_condition: {
    //id: String;
    //name: String;
    //short_name: String;
    //};
    //weather: {
    //id: String;
    //name: String;
    //short_name: String;
    //icon_uri: String;
    //};
    //race_comment: String;
    //additional_data: {
    //gait: String;
    //jump_time: String;
    //classes: [String];
    //min_hcp_weight: Number;
    //prizes: [
    //{
    //type: String;
    //value: String;
    //}
    //];
    //};
    //generated: Number;
    //silk_base_url: String;
    //video_slug: String;
    //race_comment_alternative: String;
    //};
}

export type RaceListState = Race[]
