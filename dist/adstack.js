(function(){var t,i;t={init:function(){return this._detectSVG(),this._cacheSelectors(),this._bindEvents(),this._bindPages()},_detectSVG:function(){var t;return t=!!("createElementNS"in document&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),t?void 0:document.body.className+=" no-svg"},_cacheSelectors:function(){return this.$document=$(document),this.$window=$(window),this.$dropdowns=$(".dropdown"),this.$pricingLabel=$("#pricing-label"),this.$pricing=$("#pricing"),this.$productImages=$("#product-images")},_bindEvents:function(){var t,i;return i=this,this.$document.on("click",'a[href="#"]',function(t){return t.preventDefault()}),t=this.$dropdowns,t.click(function(t){return t.preventDefault(),t.stopPropagation(),$(this).toggleClass("open")}),t.find('a:not([href="#"])').click(function(t){return t.stopPropagation()}),this.$document.on("click",function(){return t.removeClass("open")}),this.$document.on("click",".signup",function(){return analytics.track("signup-click"),AdStack.Modal({content:$("#signup-form").html(),validate:function(){var t;return t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,this.$modal.find('input[name="email"]').val().match(t)?!0:(alert("Please enter a valid email address."),!1)},init:function(){return i=this,$(window).width()>=1080&&this.$modal.find('input[type="text"]').first().focus(),this.$modal.find('input[name="lead_source"]').val(window.location||""),this.$modal.find(".cancel").on("click",function(){return i.close()}),this.$modal.find(".send").on("click",function(){return i.params.validate.call(i)?(i.$modal.find('input[name="last_name"]').val(i.$modal.find('input[name="email"]').val()),i.$modal.find("form").submit()):void 0})}})}),$(".member [title]").on("mouseover touchstart",function(){return new AdStack.Tooltip({element:this,boundingBox:".row"})})},_bindPages:function(){var t,i,o,n,e,s;return this.$pricingLabel.length&&(s=0,e=0,o=this.$pricingLabel,i=this.$pricing,n=this.$window,n.on("resize orientationchange",function(){return e=o.height(),o.hasClass("fixed")?void 0:s=o.offset().top}).trigger("resize"),n.on("scroll touchmove",function(){return n.scrollTop()>s?(n.trigger("resize"),o.addClass("fixed"),i.css("marginTop",e+"px")):(o.removeClass("fixed"),i.css("marginTop",0))}).trigger("scroll")),this.$productImages.length?(t=this.$productImages.find(".image-container"),$(window).on("resize",function(){var i;return i=t.width(),t.css("height",.204*i+"px")}).trigger("resize")):void 0}},window.AdStack=window.AdStack||{};for(i in t)AdStack[i]=t[i];$(function(){return AdStack.init()})}).call(this),function(){var t,i;t=function(){function t(t){this.params=t,this.show()}return t.prototype.show=function(){return"object"==typeof this.params&&this.params.content&&!this.$modal&&(this.$modal=$('<div id="modal" />').appendTo(document.body),this.$modalBody=$('<div class="modal-body" />').appendTo(this.$modal).css({display:"inline-block",position:"absolute",opacity:.01}).html(this.params.content).animate({opacity:1},200),this.bindEvents(),"function"==typeof this.params.init)?this.params.init.call(this):void 0},t.prototype.close=function(){return this.$modal?(this.$modal.remove(),this.$modal=void 0,this.unbindEvents()):void 0},t.prototype.toggle=function(){return this.$modal?this.close():this.show()},t.prototype.bindEvents=function(){var t,i;return i=this,t=$(window),t.on("keydown.modal",function(t){return 27===t.keyCode?i.close():void 0}),t.on("resize.modal",function(){var o,n,e,s;return o=i.$modalBody,n={width:parseInt(o.width(),10)+2*parseInt(o.css("border-left-width"),10),height:parseInt(o.height(),10)+2*parseInt(o.css("border-top-width"),10)},e=t.width()/2-n.width/2,s=t.height()/2-n.height/2,o.css({left:e,top:0>s?0:s})}).trigger("resize")},t.prototype.unbindEvents=function(){return $(window).off(".modal")},t}(),i=function(i){return new t(i)},window.AdStack=window.AdStack||{},AdStack.Modal=i}.call(this),function(){var t;t=function(){function t(t){"object"==typeof t&&(this.$this=$(t.element),this.title="string"==typeof this.$this.attr("data-title")?this.$this.attr("data-title"):this.$this.attr("title"),this.$boundingBox=this.$this.parents(t.boundingBox).first(),this.arrowSize=t.arrowSize||17,this.show())}return t.prototype.show=function(){return this.$this.attr("data-title",this.title),this.$this.attr("title",""),this.$tooltip=$('<div class="tooltip" />').appendTo(document.body),$("<p>"+this.title+"</p>").appendTo(this.$tooltip),this.$arrow=$('<div class="arrow" />').appendTo(this.$tooltip),this.position(),this.bindEvents(),this.$tooltip.animate({opacity:1},150)},t.prototype.position=function(){var t,i;return t=this.$this.offset().left+this.$this.width()/2-this.$tooltip.width()/2,this.$boundingBox.offset().left>t&&(t=this.$boundingBox.offset().left,this.$arrow.css("left",this.$this.offset().left-this.$boundingBox.offset().left+this.$this.width()/2+"px")),this.$this.offset().left+this.$tooltip.width()/2>this.$boundingBox.offset().left+this.$boundingBox.width()&&(t=this.$boundingBox.offset().left+this.$boundingBox.width()-this.$tooltip.width(),this.$arrow.css({left:"auto",right:this.$boundingBox.offset().left+this.$boundingBox.width()-this.$this.offset().left-this.$this.width()+this.$this.width()/2+"px"})),i=this.$this.offset().top-this.$tooltip.height()-this.arrowSize,this.$tooltip.css({opacity:.01,left:t,top:i})},t.prototype.bindEvents=function(){var t;return t=this,this.$this.on("mouseout touchend",function(){return t.destroy()})},t.prototype.destroy=function(){return this.$tooltip.remove(),this.$this.attr("title",this.$this.attr("data-title")),delete this},t}(),window.AdStack=window.AdStack||{},AdStack.Tooltip=t}.call(this);