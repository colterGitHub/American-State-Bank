// jQuery SWFObject v1.1.1 MIT/GPL @jon_neal
// http://jquery.thewikies.com/swfobject
(function(f,h,i){function k(a,c){var b=(a[0]||0)-(c[0]||0);return b>0||!b&&a.length>0&&k(a.slice(1),c.slice(1))}function l(a){if(typeof a!=g)return a;var c=[],b="";for(var d in a){b=typeof a[d]==g?l(a[d]):[d,m?encodeURI(a[d]):a[d]].join("=");c.push(b)}return c.join("&")}function n(a){var c=[];for(var b in a)a[b]&&c.push([b,'="',a[b],'"'].join(""));return c.join(" ")}function o(a){var c=[];for(var b in a)c.push(['<param name="',b,'" value="',l(a[b]),'" />'].join(""));return c.join("")}var g="object",m=true;try{var j=i.description||function(){return(new i("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}()}catch(p){j="Unavailable"}var e=j.match(/\d+/g)||[0];f[h]={available:e[0]>0,activeX:i&&!i.name,version:{original:j,array:e,string:e.join("."),major:parseInt(e[0],10)||0,minor:parseInt(e[1],10)||0,release:parseInt(e[2],10)||0},hasVersion:function(a){a=/string|number/.test(typeof a)?a.toString().split("."):/object/.test(typeof a)?[a.major,a.minor]:a||[0,0];return k(e,a)},encodeParams:true,expressInstall:"expressInstall.swf",expressInstallIsActive:false,create:function(a){if(!a.swf||this.expressInstallIsActive||!this.available&&!a.hasVersionFail)return false;if(!this.hasVersion(a.hasVersion||1)){this.expressInstallIsActive=true;if(typeof a.hasVersionFail=="function")if(!a.hasVersionFail.apply(a))return false;a={swf:a.expressInstall||this.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:this.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:a.swf,type:"application/x-shockwave-flash",id:a.id||"flash_"+Math.floor(Math.random()*999999999),width:a.width||320,height:a.height||180,style:a.style||""};m=typeof a.useEncode!=="undefined"?a.useEncode:this.encodeParams;a.movie=a.swf;a.wmode=a.wmode||"opaque";delete a.fallback;delete a.hasVersion;delete a.hasVersionFail;delete a.height;delete a.id;delete a.swf;delete a.useEncode;delete a.width;var c=document.createElement("div");c.innerHTML=["<object ",n(attrs),">",o(a),"</object>"].join("");return c.firstChild}};f.fn[h]=function(a){var c=this.find(g).andSelf().filter(g);/string|object/.test(typeof a)&&this.each(function(){var b=f(this),d;a=typeof a==g?a:{swf:a};a.fallback=this;if(d=f[h].create(a)){b.children().remove();b.html(d)}});typeof a=="function"&&c.each(function(){var b=this;b.jsInteractionTimeoutMs=b.jsInteractionTimeoutMs||0;if(b.jsInteractionTimeoutMs<660)b.clientWidth||b.clientHeight?a.call(b):setTimeout(function(){f(b)[h](a)},b.jsInteractionTimeoutMs+66)});return c}})(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject);// Generated by CoffeeScript 1.6.1
(function() {

  jQuery(function($) {
    var AudioCaptchaPlayerFlash, AudioCaptchaPlayerHtml, Captcha;
    AudioCaptchaPlayerFlash = (function() {

      AudioCaptchaPlayerFlash.prototype.swf = null;

      function AudioCaptchaPlayerFlash(url, $el) {
        this.swf = $('.b-captcha-audio-holder', $el);
        this.swf.flash({
          swf: "/assets/captcha/audiocaptchaplayer.swf",
          width: 1,
          height: 1,
          allowScriptAccess: true,
          flashvars: {
            audiofile: url
          }
        });
      }

      AudioCaptchaPlayerFlash.prototype.play = function() {
        return this.swf.flash(function() {
          return this.play();
        });
      };

      return AudioCaptchaPlayerFlash;

    })();
    AudioCaptchaPlayerHtml = (function() {

      AudioCaptchaPlayerHtml.prototype.audioTag = null;

      function AudioCaptchaPlayerHtml(url) {
        this.audioTag = document.createElement('audio');
        this.audioTag.src = url;
        this.audioTag.load();
      }

      AudioCaptchaPlayerHtml.prototype.play = function() {
        this.audioTag.autoplay = true;
        return this.audioTag.load();
      };

      return AudioCaptchaPlayerHtml;

    })();
    Captcha = (function() {

      Captcha.prototype.audioPlayer = null;

      function Captcha($el) {
        this.$el = $el;
        this.declareEventHandlers();
        this.switchToImageCaptcha();
        this.$el.show();
      }

      Captcha.prototype.declareEventHandlers = function() {
        var _this = this;
        $('.b-new-image-captcha', this.$el).click(function() {
          return _this.getNewImageCaptcha();
        });
        $('.b-new-audio-captcha', this.$el).click(function() {
          return _this.getNewAudioCaptcha();
        });
        $('.b-show-audio-captcha', this.$el).click(function() {
          return _this.switchToAudioCaptcha();
        });
        $('.b-show-image-captcha', this.$el).click(function() {
          return _this.switchToImageCaptcha();
        });
        return $('.b-audio-captcha-play', this.$el).click(function() {
          return _this.playAudioCaptcha();
        });
      };

      Captcha.prototype.getNewImageCaptcha = function() {
        $('.b-captcha-answer-input', this.$el).val('');
        return $.ajax("/_/api/captcha", {
          type: "POST",
          success: function(data, status, error) {
            $('.b-captcha-image', this.$el).attr({
              dataId: data.id,
              src: "/_/api/captcha/image/" + data.fileId + ".png"
            });
            return $('.b-captcha-id-input', this.$el).val(data.captchaId);
          }
        });
      };

      Captcha.prototype.getNewAudioCaptcha = function() {
        var _this = this;
        $('.b-captcha-answer-input', this.$el).val('');
        return $.ajax("/_/api/captcha/audio", {
          type: "POST",
          success: function(data, status, error) {
            var audioTag, url;
            url = "/_/api/captcha/audio/" + data.fileId + ".wav";
            $('.b-audio-captcha-download', _this.$el).attr({
              href: url
            });
            $('.b-captcha-id-input', _this.$el).val(data.captchaId);
            audioTag = document.createElement('audio');
            if (!audioTag.canPlayType || audioTag.canPlayType("audio/wav") === "no" || audioTag.canPlayType("audio/wav") === "") {
              return _this.audioPlayer = new AudioCaptchaPlayerFlash(url, _this.$el);
            } else {
              return _this.audioPlayer = new AudioCaptchaPlayerHtml(url);
            }
          }
        });
      };

      Captcha.prototype.playAudioCaptcha = function() {
        return this.audioPlayer.play();
      };

      Captcha.prototype.switchToAudioCaptcha = function() {
        $('.b-captcha-image', this.$el).hide();
        $('.b-captcha-audio', this.$el).show();
        return this.getNewAudioCaptcha();
      };

      Captcha.prototype.switchToImageCaptcha = function() {
        $('.b-captcha-audio', this.$el).hide();
        $('.b-captcha-image', this.$el).show();
        return this.getNewImageCaptcha();
      };

      return Captcha;

    })();
    return $(".b-captcha").each(function(index, item) {
      return new Captcha($(item));
    });
  });

}).call(this);
