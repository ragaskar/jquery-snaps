describe('jquery.snaps', function () {
  var main_display, previews;

  beforeEach(function() {
    var html = '<img src="original_image" id="snap_image" />' +
               '<img class="preview" rel="full_image_1" id="image_1" src="preview_image_1" />' +
               '<img class="preview" rel="full_image_2" id="image_2" src="preview_image_2" />' +
               '<img class="preview" rel="full_image_3" id="image_3" src="preview_image_3" />' +
               '<img class="preview" rel="full_image_4" id="image_4" src="preview_image_4" />';
    var fixture = $('#jasmine_content').append($(html));
    main_display = fixture.find('#snap_image');
    previews = fixture.find('.preview');
  });

  afterEach(function() {
    $('#jasmine_content').empty();
  });

  describe("after init", function() {

    beforeEach(function() {
      expect(main_display.attr("src")).toEqual("original_image");
    });

    it("should show the correct image on rollover", function() {
      main_display.snaps(".preview");
      $('#image_1').simulate("mouseover");
      expect(main_display.attr("src")).toEqual("full_image_1");
      $('#image_2').simulate("mouseover");
      expect(main_display.attr("src")).toEqual("full_image_2");
    });


  });
});