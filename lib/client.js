window.__ModuleLoader__.load({
  id: "dsh-stardew",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    var React = require("react");

    var STYLE_STARDew = ".hHd-Xa_root{border-right:3px solid #5B3A1E!important;position:relative;background-image:linear-gradient(180deg,rgba(91,58,30,.06),rgba(91,58,30,0) 260px)!important}.hHd-Xa_root::before{content:'STARDEW VALLEY';display:block;margin:12px 10px 7px;padding:6px 8px;background:#5DA144;color:#FFF8E7;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #5B3A1E;box-shadow:2px 2px 0 #5B3A1E}.hHd-Xa_root::after{content:'FARM 01 - DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px dashed #5B3A1E;color:#5B3A1E;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #5B3A1E!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(91,58,30,.7)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(91,58,30,.75)!important}.uV2eYG_primary{border:2px solid #5B3A1E!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(91,58,30,.7)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_BEACH_DAY = ".hHd-Xa_root{border-right:3px solid #2E7D6E!important;position:relative;background-image:linear-gradient(180deg,rgba(47,157,144,.08),rgba(47,157,144,0) 260px)!important}.hHd-Xa_root::before{content:'BEACH DAY';display:block;margin:12px 10px 7px;padding:6px 8px;background:#3FA9A0;color:#FFFDF4;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #2E7D6E;box-shadow:2px 2px 0 #2E7D6E}.hHd-Xa_root::after{content:'TIDE IN · DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px dashed #3FA9A0;color:#2E7D6E;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #3FA9A0!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(46,125,110,.55)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(46,125,110,.6)!important}.uV2eYG_primary{border:2px solid #2E7D6E!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(46,125,110,.55)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_BEACH_NIGHT = ".hHd-Xa_root{border-right:3px solid #5B8FB0!important;position:relative;background-image:linear-gradient(180deg,rgba(123,168,210,.1),rgba(123,168,210,0) 260px)!important}.hHd-Xa_root::before{content:'MOONLIGHT BEACH';display:block;margin:12px 10px 7px;padding:6px 8px;background:#1E4E6E;color:#EAF6FF;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #5B8FB0;box-shadow:2px 2px 0 #5B8FB0}.hHd-Xa_root::after{content:'TIDE OUT · DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px dashed #7BD0F0;color:#7BA8D2;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #7BA8D2!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(43,90,125,.6)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(43,90,125,.65)!important}.uV2eYG_primary{border:2px solid #5B8FB0!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(43,90,125,.6)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_DESERT = ".hHd-Xa_root{border-right:3px solid #C9822E!important;position:relative;background-image:linear-gradient(180deg,rgba(201,130,46,.1),rgba(201,130,46,0) 260px)!important}.hHd-Xa_root::before{content:'CALICO DESERT';display:block;margin:12px 10px 7px;padding:6px 8px;background:#C9822E;color:#FFF7E3;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #8A5218;box-shadow:2px 2px 0 #8A5218}.hHd-Xa_root::after{content:'OASIS // DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px dotted #C9822E;color:#8A5218;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #C9822E!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(138,82,24,.55)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(138,82,24,.6)!important}.uV2eYG_primary{border:2px solid #8A5218!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(138,82,24,.55)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_GINGER = ".hHd-Xa_root{border-right:3px solid #2E8B57!important;position:relative;background-image:linear-gradient(180deg,rgba(63,169,107,.1),rgba(63,169,107,0) 260px)!important}.hHd-Xa_root::before{content:'GINGER ISLAND';display:block;margin:12px 10px 7px;padding:6px 8px;background:#3FA96B;color:#F4FFF6;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #2E8B57;box-shadow:2px 2px 0 #2E8B57}.hHd-Xa_root::after{content:'PARADISE // DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px dashed #3FA96B;color:#2E8B57;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #3FA96B!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(46,139,87,.55)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(46,139,87,.6)!important}.uV2eYG_primary{border:2px solid #2E8B57!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(46,139,87,.55)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_MYSTIC = ".hHd-Xa_root{border-right:3px solid #2E4523!important;position:relative;background-image:linear-gradient(180deg,rgba(84,126,59,.14),rgba(84,126,59,0) 260px)!important}.hHd-Xa_root::before{content:'MYSTIC FOREST';display:block;margin:12px 10px 7px;padding:6px 8px;background:#547E3B;color:#EAF4DC;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #2E4523;box-shadow:2px 2px 0 #2E4523}.hHd-Xa_root::after{content:'RIDDLE // DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px dotted #547E3B;color:#2E4523;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #547E3B!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(38,58,31,.55)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(38,58,31,.6)!important}.uV2eYG_primary{border:2px solid #2E4523!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(38,58,31,.55)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_COZY = ".hHd-Xa_root{border-right:3px solid #B96A3A!important;position:relative;background-image:linear-gradient(180deg,rgba(224,138,76,.1),rgba(224,138,76,0) 260px)!important}.hHd-Xa_root::before{content:'COZY HOME';display:block;margin:12px 10px 7px;padding:6px 8px;background:#E08A4C;color:#FFF7EC;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #B96A3A;box-shadow:2px 2px 0 #B96A3A}.hHd-Xa_root::after{content:'HOME SWEET // DSH';display:block;margin:auto 10px 12px;padding-top:7px;border-top:2px solid #E08A4C;color:#B96A3A;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #E08A4C!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(185,106,58,.5)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(185,106,58,.55)!important}.uV2eYG_primary{border:2px solid #B96A3A!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(185,106,58,.5)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";
    var STYLE_PUMPKIN = ".hHd-Xa_root{border:3px solid #8A5A2A!important;position:relative;border-radius:6px!important;background:linear-gradient(180deg,#FBF0D6,#F4DFAF)!important;box-shadow:inset 0 0 0 2px #E8892F,inset 0 0 0 4px #C98A3B,3px 3px 0 rgba(90,55,20,.4)!important}.hHd-Xa_root::before{content:'PUMPKIN HARVEST';display:block;margin:14px 12px 7px;padding:6px 8px;background:#E8892F;color:#FFF3D6;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;border:2px solid #7A4A1E;box-shadow:2px 2px 0 #7A4A1E}.hHd-Xa_root::after{content:'FALL FARM // DSH';display:block;margin:auto 12px 14px;padding-top:7px;border-top:2px dotted #E8892F;color:#7A4A1E;font-family:'Fusion Pixel SC',monospace;font-size:9px;letter-spacing:.15em}.uV2eYG_card{border:2px solid #E8892F!important;border-radius:4px!important;box-shadow:3px 3px 0 rgba(122,74,30,.55)!important;transition:transform .12s ease,box-shadow .12s ease!important}.uV2eYG_card:hover{transform:translateY(-2px)!important;box-shadow:4px 5px 0 rgba(122,74,30,.6)!important}.uV2eYG_primary{border:2px solid #7A4A1E!important;border-radius:4px!important;box-shadow:2px 2px 0 rgba(122,74,30,.55)!important}.uV2eYG_primary:active{transform:translate(2px,2px)!important}.hHd-Xa_root [aria-selected=\"true\"]{border:2px solid rgba(232,137,47,.55)!important;box-shadow:inset 0 0 0 1px rgba(232,137,47,.3)!important;border-radius:4px!important}button{border-radius:4px!important}img{image-rendering:pixelated!important}";

    var PRESETS = [
      ['sd-spring', '春 Spring', '#EAF4E2', '#F4FAEC', '#35502A', '#5DA144', 'Fusion Pixel SC', 'Silkscreen', STYLE_STARDew],
      ['sd-summer', '夏 Summer', '#E3F2EF', '#EFFAF7', '#17453D', '#1F9E8E', 'Fusion Pixel SC', 'Silkscreen', STYLE_STARDew],
      ['sd-fall', '秋 Fall', '#F7E8CF', '#FDF1D9', '#5C3A17', '#D97B29', 'Fusion Pixel SC', 'Silkscreen', STYLE_STARDew],
      ['sd-winter', '冬 Winter', '#EEF3F8', '#F7FBFF', '#274257', '#4A7FB5', 'Fusion Pixel SC', 'Silkscreen', STYLE_STARDew],
      ['beach-day', '海边（白天）', '#EAF7F1', '#F7FDF9', '#24564A', '#2E9E84', 'Fusion Pixel SC', 'Silkscreen', STYLE_BEACH_DAY],
      ['beach-night', '海边（夜晚）', '#0E2A3C', '#15364C', '#D9EDF9', '#6FB4DD', 'Fusion Pixel SC', 'Silkscreen', STYLE_BEACH_NIGHT],
      ['desert', '沙漠', '#F5E6C3', '#FBF2DC', '#5C4210', '#C9822E', 'Fusion Pixel SC', 'Silkscreen', STYLE_DESERT],
      ['ginger', '姜岛', '#EAF4E0', '#F6FBF0', '#23502F', '#3FA96B', 'Fusion Pixel SC', 'Silkscreen', STYLE_GINGER],
      ['mystic', '谜语森林', '#D6E2C6', '#E9EFDD', '#22301F', '#4F7A36', 'Fusion Pixel SC', 'Silkscreen', STYLE_MYSTIC],
      ['cozy', '温馨小家', '#F7EFE2', '#FCF7EC', '#5A4126', '#E08A4C', 'Fusion Pixel SC', 'Silkscreen', STYLE_COZY],
      ['pumpkin', '丰收秋田', '#F4DCAD', '#FBF0D6', '#4A3013', '#E8892F', 'Fusion Pixel SC', 'Silkscreen', STYLE_PUMPKIN]
    ];
    var SOUND_GROUPS = [
      ['perm', '常驻选择', 'perm--bigSelect.wav perm--bob.wav perm--smallSelect.wav perm--purchaseClick.wav perm--select.wav perm--give_gift.wav perm--fishSlap.wav perm--newArtifact.wav'],
      ['attn', '注意提醒', 'attn--fishBite.wav attn--phone.wav attn--crystal.wav attn--newRecipe.wav attn--secret1.wav attn--stardrop.wav'],
      ['done', '完成成就', 'done--powerup.wav done--achievement.wav done--questcomplete.wav done--objectiveComplete.wav done--discoverMineral.wav done--reward.wav done--FishHit.wav done--jingle1.wav'],
      ['error', '错误负面', 'error--hitEnemy.wav error--ow.wav error--death.wav error--debuffHit.wav error--fishEscape.wav error--breakingGlass.wav error--cancel.wav'],
      ['click', '点击音效', 'perm--select.wav perm--smallSelect.wav perm--bigSelect.wav attn--stardrop.wav done--jingle1.wav']
    ];
    var BGM = ('bgm--01_Stardew_Valley_Overture.mp3 bgm--02_Cloud_Country.mp3 bgm--03_Grandpas_Theme.mp3 bgm--04_Settling_In.mp3 bgm--05_Spring_Its_a_Big_World_Outside.mp3 bgm--06_Spring_The_Valley_Comes_Alive.mp3 bgm--07_Spring_Wild_Horseradish_Jam.mp3 bgm--08_Pelican_Town.mp3 bgm--09_Flower_Dance.mp3 bgm--10_Fun_Festival.mp3 bgm--11_Distant_Banjo.mp3 bgm--12_A_Glimpse_Of_The_Other_World_Wizards_Theme.mp3 bgm--13_Summer_Natures_Crescendo.mp3 bgm--14_Summer_The_Sun_Can_Bend_An_Orange_Sky.mp3 bgm--15_Summer_Tropicala.mp3 bgm--16_The_Adventure_Guild.mp3 bgm--17_The_Stardrop_Saloon.mp3 bgm--18_Luau_Festival.mp3 bgm--19_Dance_Of_The_Moonlight_Jellies.mp3 bgm--20_Fall_The_Smell_of_Mushroom.mp3 bgm--21_Fall_Ghost_Synth.mp3 bgm--22_Fall_Ravens_Descent.mp3 bgm--23_The_Library_and_Museum.mp3 bgm--24_Stardew_Valley_Fair_Theme.mp3 bgm--25_Festival_Game.mp3 bgm--26_Spirits_Eve_Festival.mp3 bgm--27_Winter_Nocturne_of_Ice.mp3 bgm--28_Winter_The_Wind_Can_Be_Still.mp3 bgm--29_Winter_Ancient.mp3 bgm--30_Winter_Festival.mp3 bgm--31_A_Golden_Star_Is_Born.mp3 bgm--32_Country_Shop.mp3 bgm--33_Calico_Desert.mp3 bgm--34_Playful.mp3 bgm--35_Buttercup_Melody.mp3 bgm--36_Pleasant_Memory_Pennys_Theme.mp3 bgm--37_Piano_Solo_Elliots_Theme.mp3 bgm--38_Land_Of_Green_And_Gold_Leahs_Theme.mp3 bgm--39_A_Stillness_In_The_Rain_Abigails_Melody.mp3 bgm--40_Starwatcher_Marus_Theme.mp3 bgm--41_A_Sad_Story_Alexs_Theme.mp3 bgm--42_Pickle_Jar_Rag_Haleys_Theme.mp3 bgm--43_Echos_Sebastians_Theme.mp3 bgm--44_Grapefruit_Sky_Dr._Harveys_Theme.mp3 bgm--45_Frozen_Pizza_and_Eggs_Shanes_Theme.mp3 bgm--46_Song_of_Feathers_Emilys_Theme.mp3 bgm--47_Dreamscape.mp3 bgm--48_Emilys_Dance.mp3 bgm--49_Alexs_Keepsake.mp3 bgm--50_Band_Practice.mp3 bgm--51_Sams_Band_Electronic.mp3 bgm--52_Sams_Band_Pop.mp3 bgm--53_Sams_Band_Bluegrass.mp3 bgm--54_Sams_Band_Heavy.mp3 bgm--55_A_Dark_Corner_Of_The_Past.mp3 bgm--56_Music_Box_Song.mp3 bgm--57_Jaunty.mp3 bgm--61_Mines_A_Flicker_In_the_Deep.mp3 bgm--62_Mines_Star_Lumpy.mp3 bgm--63_Mines_Icicles.mp3 bgm--64_Mines_Marimba_Of_Frozen_Bone.mp3 bgm--65_Mines_Cloth.mp3 bgm--66_Mines_Visitor_To_The_Unknown.mp3 bgm--67_Mines_The_Lava_Dwellers.mp3 bgm--68_Mines_Magical_Shoes.mp3 bgm--69_Mines_Danger.mp3 bgm--70_In_The_Deep_Woods.mp3 bgm--71_Journey_Of_The_Prairie_King_-_Overworld.mp3 bgm--72_Journey_Of_The_Prairie_King_-_The_Outlaw.mp3 bgm--73_Journey_of_the_Prairie_King_-_Final_Boss.mp3 bgm--74_Journey_of_the_Prairie_King_-_Ending.mp3 bgm--76_Load_Game.mp3 bgm--78-Sun_Room_Alone_with_Relaxing_Tea.mp3 bgm--79-Grapefruit_Sky_Pasta_Primavera_Mix.mp3 bgm--80-The_Happy_Junimo_Show_Theme.mp3 bgm--81-Movie_Theater.mp3 bgm--82-Crane_Game.mp3 bgm--83-Wumbus_Movie_Theme.mp3 bgm--84-Exploring_Our_Vibrant_World_Movie_Theme.mp3 bgm--85-The_Zuzu_City_Express_Movie_Theme.mp3 bgm--86-Movie_Theater_Closing_Time.mp3 bgm--87-JunimoKart_Title_Theme.mp3 bgm--88-Junimo_Kart_The_Gem_Sea_Giant.mp3 bgm--89-JunimoKart_Slomps_Stomp.mp3 bgm--90-JunimoKart_Ghastly_Galleon.mp3 bgm--91-JunimoKart_Glowshroom_Grotto.mp3 bgm--92-Ginger_Island.mp3 bgm--93-Professor_Snails_Radio.mp3 bgm--94-Volcano_Mines_Molten_Jelly.mp3 bgm--95-Volcano_Mines_Forgotten_World.mp3 bgm--96-Mystery_Of_The_Caldera.mp3 bgm--97-The_Gourmands_Cave.mp3 bgm--98-Pirate_Theme.mp3 bgm--99-Leos_Song.mp3 bgm--A1-Summit_Celebration.mp3').split(' ');

    var el = React.createElement;
    function insertCss(css) {
      var tag = document.createElement("style");
      tag.textContent = css;
      document.head.appendChild(tag);
      return function () { if (tag.parentNode) tag.parentNode.removeChild(tag); };
    }
    function loadAudio(file) {
      return fetch('/@stardew/sounds/' + encodeURIComponent(file)).then(function (r) {
        if (!r.ok) return null;
        return r.blob();
      }).then(function (b) { return b ? URL.createObjectURL(b) : null; }).catch(function () { return null; });
    }
    function fetchTokenStats() {
      return fetch('/@stardew/token-stats').then(function (r) { return r.ok ? r.json() : { days: {} }; }).catch(function () { return { days: {} }; });
    }

    var win = typeof window !== 'undefined' ? window : null;
    var REG = win ? (win.__sdstAudio = win.__sdstAudio || []) : [];
    function track(a) { if (!win) return; REG.push(a); if (REG.length > 40) REG.shift(); }
    function untrack(a) { if (!win) return; var i = REG.indexOf(a); if (i >= 0) REG.splice(i, 1); }
    function killAudio(a) {
      try { a.pause(); a.removeAttribute('src'); if (a.load) a.load(); } catch (e) {}
      try { if (a._url) URL.revokeObjectURL(a._url); } catch (e) {}
    }
    function sweepAudio() { REG.slice().forEach(function (a) { killAudio(a); }); REG.length = 0; }
    sweepAudio();
    var sfxEl = null, bgmEl = null, weatherEl = null, sfxSeq = 0, bgmSeq = 0, weatherSeq = 0;
    function stopSfx() { sfxSeq++; if (sfxEl) { killAudio(sfxEl); untrack(sfxEl); sfxEl = null; } }
    function stopBgm() { bgmSeq++; if (bgmEl) { killAudio(bgmEl); untrack(bgmEl); bgmEl = null; } }
    function stopWeatherL() { weatherSeq++; if (weatherEl) { killAudio(weatherEl); untrack(weatherEl); weatherEl = null; } }
    function stopAudio() { stopSfx(); stopBgm(); stopWeatherL(); }
    function mkAudio(u, file) {
      var a = new Audio(u);
      a._file = file;
      a._url = u;
      track(a);
      return a;
    }
    function playFile(file, onErr, onEnd) {
      if (sfxEl && sfxEl._file === file) { stopSfx(); if (onEnd) onEnd(); if (onErr) onErr(''); return false; }
      var seq = ++sfxSeq;
      if (sfxEl) { killAudio(sfxEl); untrack(sfxEl); sfxEl = null; }
      loadAudio(file).then(function (u) {
        if (seq !== sfxSeq) return;
        if (!u) { if (onErr) onErr('音频无数据: ' + file); if (onEnd) onEnd(); return; }
        var a = mkAudio(u, file);
        a.onended = function () { untrack(a); if (sfxEl === a) sfxEl = null; if (onEnd) onEnd(); };
        a.onerror = function () { untrack(a); if (onErr) onErr('音频解码失败: ' + file); if (onEnd) onEnd(); if (sfxEl === a) sfxEl = null; };
        a.play().catch(function (e) { untrack(a); if (onErr) onErr('播放失败: ' + ((e && e.message) || e)); if (onEnd) onEnd(); if (sfxEl === a) sfxEl = null; });
        sfxEl = a;
        if (onErr) onErr('');
      }).catch(function (e) { if (onErr) onErr('网络失败: ' + ((e && e.message) || e)); if (onEnd) onEnd(); });
      return true;
    }
    function playLoop(file) {
      bgmSeq++;
      if (bgmEl) { killAudio(bgmEl); untrack(bgmEl); bgmEl = null; }
      var seq = bgmSeq;
      loadAudio(file).then(function (u) {
        if (seq !== bgmSeq) return;
        if (!u) return;
        var a = mkAudio(u, file);
        a.loop = true;
        a.play().catch(function () {});
        bgmEl = a;
      }).catch(function () {});
    }
    function playWeatherLoop(file, vol) {
      weatherSeq++;
      if (weatherEl) { killAudio(weatherEl); untrack(weatherEl); weatherEl = null; }
      var seq = weatherSeq;
      loadAudio(file).then(function (u) {
        if (seq !== weatherSeq) return;
        if (!u) return;
        var a = mkAudio(u, file);
        a.loop = true;
        a.volume = vol;
        a.play().catch(function () {});
        weatherEl = a;
      }).catch(function () {});
    }

    var prefs = { perm: 'perm--select.wav', attn: 'attn--stardrop.wav', done: 'done--powerup.wav', error: 'error--ow.wav', click: 'perm--select.wav' };
    var prefsOn = { perm: true, attn: true, done: true, error: true, click: false };
    var ostPref = { on: false, file: 'bgm--08_Pelican_Town.mp3' };
    var lastClick = 0;
    function autoPlay(cat) { if (prefsOn[cat] && prefs[cat]) playFile(prefs[cat], null, null); }
    function onClickAny(e) {
      var t = e && e.target;
      if (t) {
        var n0 = t.nodeType === 3 ? t.parentElement : t;
        if (n0 && n0.closest) {
          try {
            var cand = n0.closest('button, a[href], [role="button"], [role="menuitem"], [aria-label], [title]');
            for (var k = 0; k < 5 && cand; k++) {
              var lbl = (cand.getAttribute && (cand.getAttribute('aria-label') || cand.getAttribute('title') || cand.getAttribute('data-tooltip'))) || '';
              var txt = (cand.textContent || '');
              if (/新会话|新建对话|new chat|new session/i.test(lbl) || /^\s*(新会话|新建对话|new\s*chat|new\s*session)\s*$/i.test(txt.trim())) {
                playFile('perm--openBox.wav', null, null);
                return;
              }
              cand = cand.parentElement;
            }
          } catch (err) {}
        }
      }
      if (!prefsOn.click) return;
      var t = e && e.target;
      if (!t) return;
      if (t.nodeType === 3) t = t.parentElement;
      if (!t || !t.closest) return;
      var sel = 'button, a[href], select, input, textarea, label, summary, [role="button"], [role="link"], [role="checkbox"], [role="switch"], [role="tab"], [role="menuitem"], [onclick]';
      var hit = false;
      try { hit = !!t.closest(sel); } catch (err) {}
      if (!hit) {
        try { if (typeof getComputedStyle === 'function' && getComputedStyle(t).cursor === 'pointer') hit = true; } catch (err) {}
      }
      if (!hit) return;
      var now = Date.now();
      if (now - lastClick < 250) return;
      lastClick = now;
      playFile(prefs.click, null, null);
    }

    var WEATHERS = {
      'sunny': { label: '晴天', badge: '☀ SUNNY', badgeColor: '#E8B23A', tint: 'rgba(255,244,214,0.05)' },
      'light-rain': { label: '小雨', badge: '☂ RAINING', badgeColor: '#7FA8C9', tint: 'rgba(26,48,66,0.12)', rain: { density: 0.85, opacity: 0.3 }, audio: ['bgm--rain.wav', 0.42] },
      'heavy-rain': { label: '大雨', badge: '☂ RAIN HEAVY', badgeColor: '#5B86A8', tint: 'rgba(14,32,48,0.22)', rain: { density: 1.4, opacity: 0.48 }, audio: ['bgm--rain.wav', 0.58] },
      'light-snow': { label: '小雪', badge: '❄ SNOWFALL', badgeColor: '#CFE3F2', tint: 'rgba(205,220,240,0.1)', snow: { density: 0.9, opacity: 0.35 }, audio: ['bgm--winter_day.wav', 0.3] },
      'heavy-snow': { label: '大雪', badge: '❄ SNOW STORM', badgeColor: '#DCEAF5', tint: 'rgba(215,228,242,0.16)', snow: { density: 1.6, opacity: 0.5 }, audio: ['bgm--winter_day.wav', 0.45] }
    };
    var RAIN_COLOR = '105,155,235';
    var wfx = { canvas: null, ctx: null, raf: 0, running: false, parts: [], ripples: [], mode: null, last: 0, count: 0 };
    var weatherTint = null, weatherBadge = null, cssWx = null;
    var weatherState = { kind: 'sunny' };
    function makePart(mode, wx, initial) {
      var w = (window.innerWidth || 1200), h = (window.innerHeight || 800);
      if (mode === 'rain') {
        var heavy = wx.rain && wx.rain.density > 1.2;
        return {
          x: Math.random() * w,
          y: (initial ? -20 - Math.random() * h * 0.4 : -20),
          len: (12 + Math.random() * 34) * (heavy ? 1.3 : 1),
          spd: 380 + Math.random() * 640,
          alpha: 0.2 + Math.random() * 0.38,
          slant: 0.09 + Math.random() * 0.19,
          lw: 0.8 + Math.random() * 1.6,
          drift: (Math.random() - 0.5) * 24,
          ph: Math.random() * 6.2832
        };
      }
      return {
        x: Math.random() * w,
        y: (initial ? -8 - Math.random() * h * 0.3 : -8),
        r: (2.4 + Math.random() * 5.0) * (wx.snow && wx.snow.density > 1.2 ? 1.35 : 1),
        spd: 34 + Math.random() * 64,
        sway: 0.7 + Math.random() * 1.7,
        ph: Math.random() * 6.2832,
        rot: Math.random() * 6.2832,
        rotSpd: (Math.random() - 0.5) * 0.0007,
        alpha: 0.5 + Math.random() * 0.45
      };
    }
    function drawFlake(ctx, x, y, r, rot, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.strokeStyle = 'rgba(190,226,250,' + alpha + ')';
      ctx.lineWidth = Math.max(0.5, r * 0.16);
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (var i = 0; i < 6; i++) {
        var a = (i * Math.PI) / 3;
        var hx = Math.cos(a) * r;
        var hy = Math.sin(a) * r;
        ctx.moveTo(0, 0);
        ctx.lineTo(hx, hy);
        var px = Math.cos(a) * r * 0.5;
        var py = Math.sin(a) * r * 0.5;
        ctx.moveTo(px, py);
        ctx.lineTo(px + Math.cos(a + 1.05) * r * 0.38, py + Math.sin(a + 1.05) * r * 0.38);
        ctx.moveTo(px, py);
        ctx.lineTo(px + Math.cos(a - 1.05) * r * 0.38, py + Math.sin(a - 1.05) * r * 0.38);
      }
      ctx.stroke();
      ctx.restore();
    }
    function teardownWeatherFX() {
      wfx.running = false;
      if (wfx.raf) { try { cancelAnimationFrame(wfx.raf); } catch (e) {} }
      if (wfx.canvas && wfx.canvas.parentNode) wfx.canvas.parentNode.removeChild(wfx.canvas);
      wfx.canvas = null; wfx.ctx = null; wfx.parts = []; wfx.ripples = [];
      if (weatherTint && weatherTint.parentNode) weatherTint.parentNode.removeChild(weatherTint);
      if (weatherBadge && weatherBadge.parentNode) weatherBadge.parentNode.removeChild(weatherBadge);
      if (cssWx && cssWx.parentNode) cssWx.parentNode.removeChild(cssWx);
      weatherTint = null; weatherBadge = null; cssWx = null;
      stopWeatherL();
    }
    function setupFX(wx) {
      if (typeof document === 'undefined') return false;
      var canvas = document.createElement('canvas');
      canvas.className = 'svp-wx-canvas';
      document.body.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      if (!ctx) { canvas.parentNode.removeChild(canvas); return false; }
      wfx.canvas = canvas; wfx.ctx = ctx;
      resizeFX();
      wfx.mode = wx.rain ? 'rain' : 'snow';
      wfx.count = wx.rain ? Math.round(110 * wx.rain.density) : Math.round(80 * wx.snow.density);
      wfx.parts = [];
      for (var i = 0; i < wfx.count; i++) wfx.parts.push(makePart(wfx.mode, wx, true));
      wfx.last = (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now());
      return true;
    }
    function resizeFX() {
      if (!wfx.canvas || !wfx.ctx) return;
      var dpr = (window.devicePixelRatio || 1);
      var w = window.innerWidth, h = window.innerHeight;
      var cw = Math.floor(w * dpr), ch = Math.floor(h * dpr);
      if (wfx.canvas.width !== cw || wfx.canvas.height !== ch) {
        wfx.canvas.width = cw; wfx.canvas.height = ch;
        wfx.canvas.style.width = w + 'px'; wfx.canvas.style.height = h + 'px';
        wfx.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }
    function resizeGL() { resizeFX(); }
    function tickFX(wx) {
      if (!wfx.ctx || !wfx.running || !wfx.canvas) return;
      var t = (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now());
      var dt = Math.min(0.05, Math.max(0.001, (t - wfx.last) / 1000));
      wfx.last = t;
      resizeFX();
      var ctx = wfx.ctx, w = window.innerWidth, h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      while (wfx.parts.length < wfx.count) wfx.parts.push(makePart(wfx.mode, wx, false));
      for (var i = wfx.parts.length - 1; i >= 0; i--) {
        var p = wfx.parts[i];
        if (wfx.mode === 'rain') {
          p.y += p.spd * dt;
          p.x += (p.slant * p.spd + p.drift) * dt;
          if (p.y >= h - 2) {
            wfx.parts.splice(i, 1);
            if (wfx.ripples.length < 80) wfx.ripples.push({ x: p.x, r: 3, a: 0.45 + p.alpha * 0.6, vr: 70 + Math.random() * 70 });
            continue;
          }
          var headX = p.x + p.slant * p.len;
          var headY = p.y + p.len;
          var wob = Math.sin(t * 0.003 + p.ph) * 0.8;
          var mx = (p.x + headX) / 2 + wob;
          var my = (p.y + headY) / 2;
          ctx.strokeStyle = 'rgba(' + RAIN_COLOR + ',' + (p.alpha * 0.22) + ')';
          ctx.lineWidth = p.lw;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.quadraticCurveTo(mx, my, headX, headY);
          ctx.stroke();
          ctx.strokeStyle = 'rgba(' + RAIN_COLOR + ',' + p.alpha + ')';
          ctx.lineWidth = Math.max(0.6, p.lw * 0.8);
          ctx.beginPath();
          ctx.moveTo(p.x + (headX - p.x) * 0.55, p.y + (headY - p.y) * 0.55);
          ctx.quadraticCurveTo(mx, my, headX, headY);
          ctx.stroke();
          ctx.fillStyle = 'rgba(' + RAIN_COLOR + ',' + Math.min(1, p.alpha + 0.3) + ')';
          ctx.beginPath();
          ctx.arc(headX, headY, Math.max(0.8, p.lw * 0.9), 0, 6.2832);
          ctx.fill();
        } else {
          p.y += p.spd * dt;
          p.x += Math.sin(t * 0.001 * p.sway + p.ph) * 0.4;
          if (p.y > h + 10 || p.x < -20 || p.x > w + 20) { wfx.parts.splice(i, 1); continue; }
          drawFlake(ctx, p.x, p.y, p.r, p.rot + t * p.rotSpd, p.alpha);
        }
      }
      for (var ri = wfx.ripples.length - 1; ri >= 0; ri--) {
        var rp = wfx.ripples[ri];
        rp.r += rp.vr * dt;
        rp.a -= 0.55 * dt;
        if (rp.a <= 0.02) { wfx.ripples.splice(ri, 1); continue; }
        ctx.save();
        ctx.translate(rp.x, h - 1.5);
        ctx.scale(1, 0.3);
        ctx.strokeStyle = 'rgba(' + RAIN_COLOR + ',' + rp.a + ')';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, rp.r, 0, 6.2832);
        ctx.stroke();
        ctx.restore();
      }
      wfx.raf = requestAnimationFrame(function () { tickFX(wx); });
    }
    function applyWeather(kind) {
      weatherState.kind = kind;
      var wx = WEATHERS[kind] || WEATHERS.sunny;
      teardownWeatherFX();
      if (typeof document === 'undefined') return;
      weatherTint = document.createElement('div');
      weatherTint.className = 'svp-wx-tint';
      weatherTint.style.background = wx.tint;
      document.body.appendChild(weatherTint);
      weatherBadge = document.createElement('div');
      weatherBadge.className = 'svp-wx-badge';
      weatherBadge.textContent = wx.badge;
      weatherBadge.style.color = wx.badgeColor;
      weatherBadge.style.borderColor = wx.badgeColor;
      weatherBadge.style.background = 'rgba(0,0,0,0.28)';
      document.body.appendChild(weatherBadge);
      if (kind === 'sunny') return;
      var reduced = false;
      try { reduced = !!window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
      var glOk = false;
      if (!reduced) {
        glOk = setupFX(wx);
        if (glOk) { wfx.running = true; wfx.raf = requestAnimationFrame(function () { tickFX(wx); }); }
      }
      if (!glOk) {
        cssWx = document.createElement('div');
        cssWx.className = 'svp-wx-css';
        if (wx.rain) {
          cssWx.className += (wx.rain.density > 1.2) ? ' svp-wx-rain svp-wx-rain2' : ' svp-wx-rain';
        } else if (wx.snow) {
          cssWx.className += (wx.snow.density > 1.2) ? ' svp-wx-snow svp-wx-snow2' : ' svp-wx-snow';
        }
        document.body.appendChild(cssWx);
      }
      if (wx.audio) playWeatherLoop(wx.audio[0], wx.audio[1]);
    }

    var BASE_CSS = ".svp-page{display:flex;flex-direction:column;gap:14px;padding:18px 6px;color:var(--dsw-alias-label-primary)}.svp-h{font-size:15px;font-weight:700;margin:2px 0}.svp-sub{font-size:12px;color:var(--dsw-alias-label-secondary);margin-bottom:4px}.svp-grid{display:flex;flex-wrap:wrap;gap:8px}.svp-card{position:relative;width:96px;height:62px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;cursor:pointer;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:6px;color:#3a2c18;font-weight:700;font-size:12px}.svp-card.svp-on{outline:3px solid var(--dsw-alias-state-warn-primary);outline-offset:1px}.svp-mark{position:absolute;right:-4px;top:-6px;width:16px;height:16px;border-radius:8px;background:var(--dsw-alias-state-success-primary);color:#fff;text-align:center;font-size:11px}.svp-row{display:flex;align-items:center;gap:8px;margin:6px 0}.svp-row label{width:88px;font-size:13px;color:var(--dsw-alias-label-primary)}.svp-select{flex:1;max-width:320px;padding:5px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:13px}.svp-btn{padding:5px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-button-primary-fill);color:#fff;cursor:pointer;font-size:13px}.svp-btn.svp-ghost{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.svp-btn.svp-busy{opacity:.6;cursor:wait}.svp-switch{width:42px;height:24px;border-radius:12px;background:var(--dsw-alias-border-l2);position:relative;cursor:pointer;transition:background .15s;flex:none}.svp-switch.svp-on{background:var(--dsw-alias-state-success-primary)}.svp-knob{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:left .15s}.svp-switch.svp-on .svp-knob{left:21px}.svp-tabs{display:flex;gap:6px}.svp-tab{padding:4px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;cursor:pointer;font-size:13px;color:var(--dsw-alias-label-secondary)}.svp-tab.svp-on{background:var(--dsw-alias-brand-primary);color:#fff;border-color:var(--dsw-alias-brand-primary)}.svp-metric{display:flex;gap:6px;flex-wrap:wrap}.svp-chip{padding:3px 10px;border-radius:12px;font-size:12px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);cursor:pointer}.svp-chip.svp-on{background:var(--dsw-alias-brand-primary);color:#fff}.svp-heat{display:grid;grid-template-rows:repeat(7,13px);grid-auto-flow:column;gap:3px;overflow-x:auto;padding:4px 0}.svp-cell{width:13px;height:13px;border-radius:3px}.svp-month{display:grid;grid-template-columns:repeat(7,34px);gap:3px;justify-content:start}.svp-mhead{width:34px;height:16px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--dsw-alias-label-secondary)}.svp-mcell{width:34px;height:34px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--dsw-alias-label-secondary)}.svp-mcell.svp-hot{color:#fff;font-weight:700}.svp-mcell.svp-today{outline:2px solid var(--dsw-alias-state-warn-primary);outline-offset:1px}.svp-mcell.svp-blank{background:transparent!important}.svp-mdash{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start}.svp-mstats{display:flex;flex-direction:column;gap:4px;min-width:170px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px}.svp-mstat{display:flex;justify-content:space-between;gap:14px;font-size:12px;padding:3px 6px;border-radius:6px;cursor:pointer;color:var(--dsw-alias-label-secondary)}.svp-mstat.svp-on{background:var(--dsw-alias-brand-primary);color:#fff}.svp-mstat b{font-weight:700}.svp-ost{display:flex;flex-direction:column;gap:2px;max-height:300px;overflow-y:auto;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;padding:4px}.svp-ost-item{display:flex;align-items:center;gap:8px;padding:5px 8px;border-radius:6px;cursor:pointer;font-size:13px;color:var(--dsw-alias-label-primary)}.svp-ost-item:hover{background:var(--dsw-alias-bg-layer-2)}.svp-ost-item.svp-on{background:var(--dsw-alias-brand-primary);color:#fff}.svp-ost-search{margin-bottom:6px}.svp-search{flex:1;max-width:340px;padding:5px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.svp-weather{display:flex;gap:8px;flex-wrap:wrap}.svp-wchip{padding:6px 14px;border:1px dashed var(--dsw-alias-border-l2);border-radius:14px;font-size:13px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:var(--dsw-alias-bg-layer-1)}.svp-wchip.svp-on{background:var(--dsw-alias-brand-primary);color:#fff;border-style:solid;border-color:var(--dsw-alias-brand-primary)}.svp-wx-tint{position:fixed;inset:0;pointer-events:none;z-index:2147482990}.svp-wx-css{position:fixed;inset:0;pointer-events:none;z-index:2147482995;opacity:.38}.svp-wx-rain{background-image:repeating-linear-gradient(103deg,transparent 0 13px,rgba(190,215,235,.32) 13px 13.5px);animation:svpWxShift .6s linear infinite}.svp-wx-rain2{background-image:repeating-linear-gradient(97deg,transparent 0 22px,rgba(190,215,235,.2) 22px 22.5px);animation:svpWxShift .9s linear infinite}.svp-wx-snow{background-image:radial-gradient(rgba(255,255,255,.75) 1px,transparent 1.8px);background-size:32px 32px;animation:svpWxSnow 10s linear infinite}.svp-wx-snow2{background-image:radial-gradient(rgba(255,255,255,.5) 1px,transparent 2px);background-size:50px 50px;animation:svpWxSnow 15s linear infinite}.svp-wx-canvas{position:fixed;inset:0;pointer-events:none;z-index:2147483000}.svp-wx-badge{position:fixed;top:10px;right:12px;z-index:2147483100;pointer-events:none;font-family:'Fusion Pixel SC',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;padding:5px 10px;border:2px solid currentColor;box-shadow:2px 2px 0 rgba(0,0,0,.35);border-radius:3px}@keyframes svpWxShift{from{background-position:0 0}to{background-position:0 44px}}@keyframes svpWxSnow{from{background-position:0 0}to{background-position:0 30px}}@media(prefers-reduced-motion:reduce){.svp-wx-rain,.svp-wx-rain2,.svp-wx-snow,.svp-wx-snow2{animation:none}}.svp-stat{display:flex;gap:14px;flex-wrap:wrap;margin-top:6px}.svp-stat b{font-size:18px}.svp-note{font-size:11px;color:var(--dsw-alias-label-secondary)}.svp-eq{display:inline-flex;align-items:flex-end;gap:2px;width:14px;height:14px;flex:none}.svp-eq i{width:3px;background:currentColor;border-radius:1px;animation:svpEq .8s ease-in-out infinite}.svp-eq i:nth-child(2){animation-delay:.15s}.svp-eq i:nth-child(3){animation-delay:.3s}@keyframes svpEq{0%,100%{height:4px}50%{height:12px}}@media(prefers-reduced-motion:reduce){.svp-eq i{animation:none;height:8px}}.svp-mcell{cursor:pointer}.svp-mcell:hover{background:rgba(93,161,71,.14)}.svp-mcell.svp-sel{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.svp-calday{display:flex;gap:16px;align-items:flex-start}.svp-calday .svp-daypanel{flex:none;width:230px}.svp-3col{display:flex;gap:14px;align-items:flex-start;justify-content:center}.svp-3col .svp-daypanel,.svp-3col .svp-mstats{flex:1 1 200px;max-width:280px;min-width:170px}.svp-monthfull{width:100%}.svp-monthfull .svp-daypanel{width:100%;max-width:none}.svp-panelrow{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start}.svp-panelrow .svp-daypanel{flex:1;min-width:210px}.svp-panelrow .svp-mstats{flex:1;min-width:210px}.svp-daypanel{display:flex;flex-direction:column;gap:4px;min-width:200px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px}.svp-drow{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:12px;color:var(--dsw-alias-label-secondary)}.svp-drow b{font-weight:700;color:var(--dsw-alias-label-primary)}.svp-dbar{height:6px;border-radius:3px;background:var(--dsw-alias-bg-layer-2);overflow:hidden;flex:1}.svp-dbar i{display:block;height:100%;background:var(--dsw-alias-brand-primary);border-radius:3px}.svp-title{font-family:'Fusion Pixel SC',monospace!important;color:var(--dsw-alias-brand-primary)!important;letter-spacing:.08em;text-shadow:1px 1px 0 rgba(0,0,0,.18)}.hHd-Xa_root::before{clip-path:polygon(0 5px,5px 0,calc(100% - 5px) 0,100% 5px,100% calc(100% - 5px),calc(100% - 5px) 100%,5px 100%,0 calc(100% - 5px));text-shadow:1px 1px 0 rgba(0,0,0,.45),2px 2px 0 rgba(0,0,0,.22);border-width:2px!important;border-style:solid!important;border-radius:0!important}";

    function Section(h, sub, children) {
      return el('div', { className: 'svp-sec' }, [
        el('div', { className: 'svp-h' }, h),
        sub ? el('div', { className: 'svp-sub' }, sub) : null,
        children
      ]);
    }
    function SoundRow(props) {
      var g = props.g; var onErr = props.onErr;
      var opts = g[2].split(' ');
      var s = React.useState(prefs[g[0]]), val = s[0], setVal = s[1];
      var e = React.useState(prefsOn[g[0]]), enabled = e[0], setEnabled = e[1];
      var b = React.useState(false), busy = b[0], setBusy = b[1];
      function setFile(v) { prefs[g[0]] = v; }
      function play(v) {
        setBusy(true);
        playFile(v, function (msg) { setBusy(false); onErr(msg); }, function () { setBusy(false); });
      }
      return el('div', { className: 'svp-row' }, [
        el('div', { className: 'svp-switch' + (enabled ? ' svp-on' : ''), title: '自动触发开关', onClick: function () { var n = !enabled; prefsOn[g[0]] = n; setEnabled(n); } }, el('div', { className: 'svp-knob' })),
        el('label', null, g[1]),
        el('select', { className: 'svp-select', value: val, onChange: function (e2) { setVal(e2.target.value); setFile(e2.target.value); play(e2.target.value); } },
          opts.map(function (o) { return el('option', { key: o, value: o }, o.replace(/^[^_]+--/, '').replace(/\.wav$/, '')); })),
        el('button', { className: 'svp-btn svp-ghost' + (busy ? ' svp-busy' : ''), onClick: function () { play(val); } }, busy ? '播放中…' : '试听')
      ]);
    }

    function apply(ctx) {
      var theme = ctx.get('theme');
      var slots = ctx.get('slots');
      if (!theme || !slots) return;
      var colorDispose = null, styleDispose = null, fontDispose = null, pixelDispose = null, bannerDispose = null, injectDispose = null, cssDispose = null;

      function clearStyle() { if (styleDispose) { styleDispose(); styleDispose = null; } }
      function clearColor() { if (colorDispose) { colorDispose(); colorDispose = null; } }
      function clearFont() { if (fontDispose) { fontDispose(); fontDispose = null; } }
      function clearBanner() { if (bannerDispose) { bannerDispose(); bannerDispose = null; } }
      function applySeason(p) {
        clearStyle(); clearColor(); clearFont(); clearBanner();
        var toks = {};
        function set(k, v) { toks[k] = { light: v, dark: v }; }
        set('--dsw-alias-bg-base', p[2]); set('--dsw-alias-bg-layer-1', p[3]); set('--dsw-alias-bg-layer-2', p[2]);
        set('--dsw-alias-label-primary', p[4]); set('--dsw-alias-label-secondary', p[4]);
        set('--dsw-alias-brand-primary', p[5]); set('--dsw-specific-sidebar-fill', p[3]);
        set('--dsw-alias-button-primary-fill', p[5]); set('--dsw-alias-button-info-fill', p[5]); set('--dsw-alias-button-info-hover', p[5]);
        set('--dsw-alias-state-business-primary', p[5]);
        colorDispose = theme.overrideTokens('dsh-stardew', toks);
        if (p[8]) styleDispose = insertCss(p[8]);
        bannerDispose = insertCss('.hHd-Xa_root::before{background:' + p[5] + '!important;border-color:rgba(45,26,8,.9)!important;box-shadow:2px 2px 0 rgba(45,26,8,.85)!important}');
      }
      function applyPixelFont(on) {
        if (pixelDispose) { pixelDispose(); pixelDispose = null; }
        if (on) pixelDispose = insertCss(":root{--dsw-font-family:'Fusion Pixel SC','Silkscreen',sans-serif!important;--ds-font-family-code:'Silkscreen',monospace!important}body{font-family:'Fusion Pixel SC','Silkscreen',sans-serif!important}");
      }
      applyPixelFont(true);
      applyWeather('sunny');

      function Page() {
        var st = React.useState(null), activeStyle = st[0], setActiveStyle = st[1];
        var pf = React.useState(true), pixelFont = pf[0], setPixelFont = pf[1];
        var ost = React.useState(null), ostPlaying = ost[0], setOstPlaying = ost[1];
        var q = React.useState(''), ostQuery = q[0], setOstQuery = q[1];
        var ts = React.useState({ days: {} }), tokenStats = ts[0], setTokenStats = ts[1];
        var mo = React.useState(0), monthOffset = mo[0], setMonthOffset = mo[1];
        var sd = React.useState(null), selectedDay = sd[0], setSelectedDay = sd[1];
        var ae = React.useState(''), audioErr = ae[0], setAudioErr = ae[1];
        var bg = React.useState(ostPref.on), ostBg = bg[0], setOstBg = bg[1];
        var wt = React.useState(weatherState.kind), weatherKind = wt[0], setWeatherKind = wt[1];

        React.useEffect(function () {
          fetchTokenStats().then(function (r) {
            setTokenStats(r && r.days ? r : { days: {} });
          });
        }, []);

        function fname(file) { return file.replace(/^bgm--/, '').replace(/\.mp3$/, '').replace(/_/g, ' '); }
        function pickSeason(p) {
          applySeason(p); setActiveStyle(p[0]);
          if (p[0] === 'sd-winter') { applyWeather('heavy-snow'); setWeatherKind('heavy-snow'); }
          else { applyWeather('sunny'); setWeatherKind('sunny'); }
        }
        function togglePixel() { var n = !pixelFont; setPixelFont(n); applyPixelFont(n); }
        function pickWeather(k) { applyWeather(k); setWeatherKind(k); }
        function toggleBg() {
          var n = !ostPref.on; ostPref.on = n; setOstBg(n);
          if (n) { playLoop(ostPref.file); setOstPlaying(ostPref.file); } else { stopAudio(); setOstPlaying(null); }
        }
        function playOst(file) {
          ostPref.file = file;
          if (ostPref.on) { playLoop(file); setOstPlaying(file); return; }
          var playing = playFile(file,
            function (msg) { setAudioErr(msg); setOstPlaying(null); },
            function () { setOstPlaying(function (cur) { return cur === file ? null : cur; }); });
          if (playing) setOstPlaying(file);
        }
        function stopOst() { stopAudio(); setOstPlaying(null); setAudioErr(''); ostPref.on = false; setOstBg(false); }

        var presetCards = PRESETS.map(function (p) {
          var on = activeStyle === p[0];
          return el('div', { key: p[0], className: 'svp-card' + (on ? ' svp-on' : ''), style: { background: 'linear-gradient(135deg,' + p[2] + ',' + p[3] + ')', color: p[4] }, title: p[1], onClick: function () { pickSeason(p); } }, [
            el('span', null, p[1]), on ? el('span', { className: 'svp-mark' }, '✓') : null
          ]);
        });
        var soundRows = SOUND_GROUPS.map(function (g) { return el(SoundRow, { key: g[0], g: g, onErr: setAudioErr }); });

        var ql = (ostQuery || '').toLowerCase();
        var ostList = BGM.filter(function (f) { return f.toLowerCase().indexOf(ql) !== -1; });
        var ostItems = ostList.map(function (f) {
          var on = ostPlaying === f;
          return el('div', { key: f, className: 'svp-ost-item' + (on ? ' svp-on' : ''), title: on ? '正在播放' : '点击播放', onClick: function () { playOst(f); } }, [
            el('span', null, fname(f)),
            on ? el('span', { className: 'svp-eq' }, [el('i', { key: 'a' }), el('i', { key: 'b' }), el('i', { key: 'c' })]) : null
          ]);
        });
        var bgSwitch = el('div', { className: 'svp-switch' + (ostBg ? ' svp-on' : ''), title: '播放背景音乐', onClick: toggleBg }, el('div', { className: 'svp-knob' }));
        var nowLine = el('div', { className: 'svp-row' }, [
          ostPlaying ? el('span', { className: 'svp-eq' }, [el('i', { key: 'a' }), el('i', { key: 'b' }), el('i', { key: 'c' })]) : null,
          el('span', { className: 'svp-note' }, ostPlaying ? '正在播放：' + fname(ostPlaying) : '未在播放 · 点击曲目试听，或开启播放背景音乐')
        ]);

        var pixelToggle = el('div', { className: 'svp-switch' + (pixelFont ? ' svp-on' : ''), onClick: togglePixel }, el('div', { className: 'svp-knob' }));

        var days = tokenStats.days || {};
        var metricKeys = { total: '总计', inputMiss: '输入(缓存未命中)', inputHit: '输入(缓存命中)', output: '输出' };
        var metrics = ['total', 'inputMiss', 'inputHit', 'output'];
        function ymOf(off) {
          var t = new Date();
          var m1 = t.getUTCMonth() + off;
          var y = t.getUTCFullYear() + Math.floor(m1 / 12);
          var m = ((m1 % 12) + 12) % 12;
          return { y: y, m: m };
        }
        function monthCells() {
          var t = new Date();
          var ym = ymOf(monthOffset);
          var y = ym.y, m = ym.m;
          var dim = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
          var first = new Date(Date.UTC(y, m, 1)).getUTCDay();
          var lead = (first + 6) % 7;
          var mmax = 0;
          var keys = [];
          for (var d = 1; d <= dim; d++) {
            var k = new Date(Date.UTC(y, m, d)).toISOString().slice(0, 10);
            keys.push(k);
            var v = days[k] ? (days[k].total || 0) : 0;
            if (v > mmax) mmax = v;
          }
          var tKey = t.toISOString().slice(0, 10);
          function pickDay(kk) { return function () { setSelectedDay(kk); }; }
          var out = [];
          for (var i = 0; i < lead; i++) out.push(el('div', { key: 'b' + i, className: 'svp-mcell svp-blank' }));
          for (var d2 = 0; d2 < dim; d2++) {
            var k2 = keys[d2];
            var v2 = days[k2] ? (days[k2].total || 0) : 0;
            var lvl = mmax > 0 ? Math.min(4, Math.ceil(v2 / mmax * 4)) : 0;
            out.push(el('div', { key: k2, className: 'svp-mcell' + (k2 === tKey ? ' svp-today' : '') + (v2 > 0 && lvl >= 3 ? ' svp-hot' : '') + (selectedDay === k2 ? ' svp-sel' : ''), title: k2 + ' · ' + v2 + ' tokens', style: v2 > 0 ? { background: LV[lvl] } : null, onClick: pickDay(k2) }, String(d2 + 1)));
          }
          while (out.length % 7 !== 0) out.push(el('div', { key: 't' + out.length, className: 'svp-mcell svp-blank' }));
          return out;
        }
        function keyDate(k) { var p = k.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); }
        function weekOfDay(k) {
          var d = keyDate(k);
          var dow = (d.getUTCDay() + 6) % 7;
          var mon = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - dow));
          var keys = [];
          for (var i = 0; i < 7; i++) {
            var t = new Date(Date.UTC(mon.getUTCFullYear(), mon.getUTCMonth(), mon.getUTCDate() + i));
            keys.push(t.toISOString().slice(0, 10));
          }
          return keys;
        }
        function sumByPrefix(pre) {
          var t = { total: 0, inputMiss: 0, inputHit: 0, output: 0 };
          Object.keys(days).forEach(function (d) { if (d.slice(0, 7) !== pre) return; metrics.forEach(function (k) { t[k] += days[d][k] || 0; }); });
          return t;
        }
        function sumKeys(keys) {
          var t = { total: 0, inputMiss: 0, inputHit: 0, output: 0 };
          keys.forEach(function (k) { var b = days[k]; if (b) metrics.forEach(function (m) { t[m] += b[m] || 0; }); });
          return t;
        }
        function statPanel(title, data) {
          return el('div', { className: 'svp-daypanel' }, [
            el('div', { className: 'svp-note' }, title),
            metrics.map(function (k) {
              var v = data[k] || 0;
              var pct = (data.total || 0) > 0 ? Math.round(v / data.total * 100) : 0;
              return el('div', { key: k, className: 'svp-drow' }, [
                el('span', null, metricKeys[k]),
                el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', flex: '1', maxWidth: '130px' } }, [
                  el('div', { className: 'svp-dbar' }, el('i', { style: { width: pct + '%' } })),
                  el('b', null, String(v))
                ])
              ]);
            })
          ]);
        }
        var LV = ['rgba(93,161,71,0.14)', 'rgba(93,161,71,0.42)', 'rgba(93,161,71,0.66)', 'rgba(93,161,71,0.85)', '#5DA144'];

        var ym = ymOf(monthOffset);
        var monthHead = ['一', '二', '三', '四', '五', '六', '日'].map(function (w, i) { return el('div', { key: 'h' + i, className: 'svp-mhead' }, w); });
        var monthGridCells = monthCells();
        var monthBox = el('div', { className: 'svp-month' }, monthHead.concat(monthGridCells));
        var bodyBlock;
        if (selectedDay) {
          var wKeys = weekOfDay(selectedDay);
          var wStart = wKeys[0].slice(5).replace('-', '/');
          var wEnd = wKeys[6].slice(5).replace('-', '/');
          var mPre = selectedDay.slice(0, 7);
          bodyBlock = el('div', null, [
            el('div', { className: 'svp-calday', style: { marginTop: '6px' } }, [
              monthBox,
              statPanel('当日 · ' + selectedDay.replace(/-/g, '/'), days[selectedDay] || { total: 0, inputMiss: 0, inputHit: 0, output: 0 })
            ]),
            el('div', { className: 'svp-panelrow', style: { marginTop: '10px' } }, [
              statPanel('当周 · ' + wStart + ' ~ ' + wEnd, sumKeys(wKeys)),
              statPanel('当月 · ' + mPre.replace('-', '年') + '月', sumByPrefix(mPre))
            ])
          ]);
        } else {
          bodyBlock = el('div', null, [
            el('div', { style: { marginTop: '6px' } }, [monthBox]),
            el('div', { className: 'svp-note', style: { marginTop: '8px' } }, '点击日历日期，查看当天 / 当周 / 当月 Token')
          ]);
        }
        var navRow = el('div', { className: 'svp-row' }, [
          el('button', { className: 'svp-btn svp-ghost', onClick: function () { setSelectedDay(null); setMonthOffset(monthOffset - 1); } }, '◀ 上月'),
          el('span', { className: 'svp-note', style: { fontSize: '13px', fontWeight: '700' } }, ym.y + '年' + (ym.m + 1) + '月'),
          el('button', { className: 'svp-btn svp-ghost', onClick: function () { setSelectedDay(null); setMonthOffset(monthOffset + 1); } }, '下月 ▶'),
          monthOffset !== 0 ? el('button', { className: 'svp-btn svp-ghost', onClick: function () { setSelectedDay(null); setMonthOffset(0); } }, '回到本月') : null
        ]);

        var weatherKeys = ['sunny', 'light-rain', 'heavy-rain', 'light-snow', 'heavy-snow'];
        var weatherChips = weatherKeys.map(function (k) {
          var on = weatherKind === k;
          return el('span', { key: k, className: 'svp-wchip' + (on ? ' svp-on' : ''), onClick: function () { pickWeather(k); } }, WEATHERS[k].label);
        });
        var errNote = audioErr ? el('div', { className: 'svp-note', style: { color: 'var(--dsw-alias-state-error-primary)' } }, audioErr) : null;

        return el('div', { className: 'svp-page' }, [
          el('div', { className: 'svp-h svp-title', style: { fontSize: '18px' } }, 'Stardew Valley · 星露谷'),
          el('div', { className: 'svp-sub' }, '英文 UI 风格与音效设置'),
          Section('1 · UI 风格', '十一个预设全部可用：春/夏/秋/冬 + 海边(白天/夜晚)、沙漠、姜岛、谜语森林、温馨小家、丰收秋田。点击即套用对应主题（配色+侧栏横幅+卡片装饰）。冬联动大雪；切换到其他预设回到晴天（天气仅手动选择时生效）。', el('div', { className: 'svp-grid' }, presetCards)),
          Section('2 · 提醒音效', '每类音效可开关自动触发：常驻=回合开始，注意=请求审批/提问，完成=回合/任务/作业结束，错误=出错，点击=按钮等可交互元素（默认关闭，可在设置里开启）。点击「新会话」会响起木箱放置音效（openBox，独立触发）。', el('div', null, [el('div', null, soundRows), errNote])),
          Section('3 · 背景 OST', '完整星露谷原声。开启「播放背景音乐」后循环播放所选曲目；点击曲目可切换/试听。', el('div', null, [
            el('div', { className: 'svp-row' }, [bgSwitch, el('label', null, '播放背景音乐'), el('span', { className: 'svp-note' }, fname(ostPref.file))]),
            nowLine,
            el('div', { className: 'svp-row svp-ost-search' }, [el('input', { className: 'svp-search', placeholder: '搜索曲目…', value: ostQuery, onChange: function (e) { setOstQuery(e.target.value); } }), el('button', { className: 'svp-btn svp-ghost', onClick: stopOst }, '停止')]),
            el('div', { className: 'svp-ost' }, ostItems),
            errNote
          ])),
          Section('4 · 像素字体启用', '开启后全局使用 Fusion Pixel SC / Silkscreen 像素字体；关闭即恢复默认字体（预设不再自带像素字体）。', el('div', { className: 'svp-row' }, [pixelToggle, el('span', { className: 'svp-note' }, pixelFont ? '已启用' : '未启用')])),
          Section('5 · 总 Token 计数', 'GitHub 风格热力图。数据口径：持久化会话日志投影的真实用量（总计含缓存写入），按会话日期分桶聚合。', el('div', null, [
            el('div', null, [navRow, bodyBlock]),
            el('div', { className: 'svp-note', style: { marginTop: '4px' } }, '深浅按当月最大值归一；今日有描边；点击任意日期同时查看当天 / 当周 / 当月 Token 消耗。')
          ])),
          Section('6 · 天气', '手动选择天气氛围（WebGL 粒子 + 环境音低音量常开）。点击「冬 Winter」预设会自动联动大雪。', el('div', { className: 'svp-weather' }, weatherChips))
        ]);
      }

      injectDispose = slots.inject('settings.section', function () {
        return slots.register({ name: 'settings.section', id: 'stardew-sv', order: 30, label: '星露谷 Stardew Valley' }, function () { return el(Page); });
      });
      cssDispose = insertCss(BASE_CSS);
      ctx.effect(function () {
        var doc = typeof document !== 'undefined' && document.addEventListener ? document : null;
        if (!doc) return function () {};
        var resume = function () {
          [bgmEl, weatherEl].forEach(function (a) {
            if (a && a.paused && a.src && !a.ended) { try { a.play().catch(function () {}); } catch (e) {} }
          });
        };
        doc.addEventListener('click', onClickAny);
        doc.addEventListener('click', resume);
        doc.addEventListener('keydown', resume);
        var onResize = function () { resizeGL(); };
        window.addEventListener('resize', onResize);
        return function () { doc.removeEventListener('click', onClickAny); doc.removeEventListener('click', resume); doc.removeEventListener('keydown', resume); window.removeEventListener('resize', onResize); };
      });
      var timerSvc = ctx.get('timer');
      if (timerSvc) {
        ctx.effect(function () {
          var iv = timerSvc.interval(function () {
            fetch('/@stardew/pending-sounds').then(function (r) { return r.ok ? r.json() : null; }).then(function (data) {
              var s = data && data.sounds;
              if (!s || !s.length) return;
              var seen = {};
              s.forEach(function (c) { seen[c] = true; });
              Object.keys(seen).forEach(function (c) { autoPlay(c); });
            }).catch(function () {});
          }, 1200);
          return function () { try { iv(); } catch (e) {} };
        });
      }
      ctx.effect(function () {
        return function () {
          if (injectDispose) injectDispose();
          if (cssDispose) cssDispose();
          if (colorDispose) colorDispose();
          if (styleDispose) styleDispose();
          if (fontDispose) fontDispose();
          if (pixelDispose) pixelDispose();
          if (bannerDispose) bannerDispose();
          teardownWeatherFX();
          stopAudio();
        };
      });
    }

    exports.inject = ["theme", "slots"];
    exports.apply = apply;
    return module.exports;
  }
});
