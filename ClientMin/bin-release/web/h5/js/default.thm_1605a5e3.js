window.gameSkin={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = {"labelStroke":{"stroke":1,"strokeColor":"0x000000","fontFamily":"SimHei"}};
                generateEUI.skins = {"eui.Button":"resource/skins/common/ButtonSkin.exml","game.ScaleButton":"resource/skins/common/ButtonSkin.exml","game.Square":"resource/skins/common/SquareSkin.exml","game.TestView":"resource/skins/modules/test/TestSkin.exml","game.SceneView":"resource/skins/modules/scene/SceneSkin.exml","game.TestItem":"resource/skins/modules/test/item/TestItemSKin.exml","game.TestComponent":"resource/skins/modules/test/item/TestItemSKin.exml","game.Shapea":"resource/skins/shape/ShapeaSkin.exml","game.MapBaseItem":"resource/skins/modules/main/MapSkin.exml","game.BorderItem":"resource/skins/modules/main/BorderSkin.exml","game.PortBtnItem":"resource/skins/modules/port/item/PortBtnItemSkin.exml","game.StarsItem":"resource/skins/modules/port/item/StarsItemSkin.exml","game.SetView":"resource/skins/modules/set/SetSkin.exml","game.ToolView":"resource/skins/modules/tool/ToolSkin.exml","game.AdView":"resource/skins/modules/Ad/AdSkin.exml","game.RankItem":"resource/skins/modules/rank/RankItemSkin.exml"};generateEUI.paths['resource/skins/common/ButtonSkin.exml'] = window.gameSkin.Button = (function (_super) {
	__extends(Button, _super);
	function Button() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay","group"];
		
		this.currentState = "disabled";
		this.minHeight = 52;
		this.minWidth = 135;
		this.elementsContent = [this._Image1_i(),this.group_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Button.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(48,12,40,26);
		t.percentWidth = 100;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.labelDisplay_i(),this.iconDisplay_i()];
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.style = "labelStroke";
		t.left = 20;
		t.right = 20;
		t.size = 24;
		t.text = "通用";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = -3;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		return t;
	};
	return Button;
})(eui.Skin);generateEUI.paths['resource/skins/common/SquareSkin.exml'] = window.gameSkin.SquareSkin = (function (_super) {
	__extends(SquareSkin, _super);
	function SquareSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "0";
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this._Image5_i();
		
		this._Image6_i();
		
		this._Image7_i();
		
		this._Image8_i();
		
		this.states = [
			new eui.State ("1",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("2",
				[
					new eui.AddItems("_Image7","",1,"")
				])
			,
			new eui.State ("3",
				[
					new eui.AddItems("_Image6","",1,"")
				])
			,
			new eui.State ("4",
				[
					new eui.AddItems("_Image5","",1,"")
				])
			,
			new eui.State ("5",
				[
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("6",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("0",
				[
					new eui.AddItems("_Image8","",1,"")
				])
			,
			new eui.State ("8",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = SquareSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "common_json.mapno_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "common_json.wood_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "common_json.wood_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.source = "common_json.wood_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.source = "common_json.wood_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.source = "common_json.wood_3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.source = "common_json.wood_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.source = "common_json.map_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SquareSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/Ad/AdSkin.exml'] = window.gameSkin.AdSkin = (function (_super) {
	__extends(AdSkin, _super);
	var AdSkin$Skin1 = 	(function (_super) {
		__extends(AdSkin$Skin1, _super);
		function AdSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AdSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		return AdSkin$Skin1;
	})(eui.Skin);

	function AdSkin() {
		_super.call(this);
		this.skinParts = ["btn_close"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_i(),this._Image3_i(),this._Image4_i()];
	}
	var _proto = AdSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 549.33;
		t.horizontalCenter = 0;
		t.source = "bg_frame_png";
		t.verticalCenter = 0;
		t.width = 520;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 278.48;
		t.scale9Grid = new egret.Rectangle(12,12,7,6);
		t.source = "common_json.text-bg";
		t.width = 408.79;
		t.x = 115.44;
		t.y = 416.4;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new game.ScaleButton();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.6;
		t.label = "";
		t.width = 58.8;
		t.x = 528;
		t.y = 336;
		t.skinName = AdSkin$Skin1;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 264;
		t.source = "can_not_click-text1_png";
		t.width = 304;
		t.x = 168;
		t.y = 423;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "common_json.adtext";
		t.y = 302;
		return t;
	};
	return AdSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/login/LoginSkin.exml'] = window.gameSkin.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	var LoginSkin$Skin2 = 	(function (_super) {
		__extends(LoginSkin$Skin2, _super);
		function LoginSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 30;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "确定";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 187.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return LoginSkin$Skin2;
	})(eui.Skin);

	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["btn_login","text_username"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1137;
		t.width = 639;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.btn_login_i(),this.text_username_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xf9bd81;
		t.height = 454;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0.6;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 432;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 510;
		t.source = "common_json.map_bg";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 418;
		t.x = 113;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 521;
		t.horizontalCenter = 1;
		t.source = "bg_frame_png";
		t.verticalCenter = -14;
		t.width = 477.33;
		return t;
	};
	_proto.btn_login_i = function () {
		var t = new game.ScaleButton();
		this.btn_login = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = -1;
		t.label = "确定";
		t.verticalCenter = 141.5;
		t.width = 145;
		t.skinName = LoginSkin$Skin2;
		return t;
	};
	_proto.text_username_i = function () {
		var t = new eui.EditableText();
		this.text_username = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xeda923;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0x1af409;
		t.cacheAsBitmap = true;
		t.height = 53;
		t.horizontalCenter = "55.5";
		t.strokeColor = 0x00ffde;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = "-45";
		t.width = 267.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 52.67;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "用户登录";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 144.66;
		t.y = 297;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.bold = true;
		t.borderColor = 0x000000;
		t.fontFamily = "SimHei";
		t.height = 52.67;
		t.horizontalCenter = 5;
		t.size = 36;
		t.stroke = 4;
		t.strokeColor = 0x038208;
		t.text = "用户登录";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -245;
		t.width = 187.33;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xffa900;
		t.bold = false;
		t.border = false;
		t.borderColor = 0xedac15;
		t.fontFamily = "SimHei";
		t.height = 50.33;
		t.size = 40;
		t.stroke = 5;
		t.strokeColor = 0xe0b523;
		t.text = "账号：";
		t.textColor = 0xffffff;
		t.width = 161.34;
		t.x = 124.33;
		t.y = 501.67;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/humor/HumorSkin.exml'] = window.gameSkin.HumorSkin = (function (_super) {
	__extends(HumorSkin, _super);
	var HumorSkin$Skin3 = 	(function (_super) {
		__extends(HumorSkin$Skin3, _super);
		function HumorSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HumorSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.starnum_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HumorSkin$Skin3;
	})(eui.Skin);

	var HumorSkin$Skin4 = 	(function (_super) {
		__extends(HumorSkin$Skin4, _super);
		function HumorSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HumorSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		return HumorSkin$Skin4;
	})(eui.Skin);

	var HumorSkin$Skin5 = 	(function (_super) {
		__extends(HumorSkin$Skin5, _super);
		function HumorSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HumorSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "common_json.preser_bg";
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 69;
			t.width = 210;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "common_json.preser";
			t.verticalCenter = 0;
			return t;
		};
		return HumorSkin$Skin5;
	})(eui.Skin);

	var HumorSkin$Skin6 = 	(function (_super) {
		__extends(HumorSkin$Skin6, _super);
		function HumorSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HumorSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HumorSkin$Skin6;
	})(eui.Skin);

	function HumorSkin() {
		_super.call(this);
		this.skinParts = ["img_buyao","img_buneng","btn_close","edit_text","btn_port"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._ScaleButton1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.img_buyao_i(),this.img_buneng_i(),this.btn_close_i(),this._ScaleButton2_i(),this.edit_text_i(),this.btn_port_i()];
	}
	var _proto = HumorSkin.prototype;

	_proto._ScaleButton1_i = function () {
		var t = new game.ScaleButton();
		t.label = "";
		t.x = 369.2;
		t.y = 77.08;
		t.skinName = HumorSkin$Skin3;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 548;
		t.horizontalCenter = 1.5;
		t.source = "bg_frame_png";
		t.width = 520.94;
		t.y = 279.52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "common_json.contacttext";
		t.x = 240.64;
		t.y = 285.2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 278.48;
		t.scale9Grid = new egret.Rectangle(12,12,7,6);
		t.source = "common_json.text-bg";
		t.width = 408.79;
		t.x = 115.44;
		t.y = 416.4;
		return t;
	};
	_proto.img_buyao_i = function () {
		var t = new eui.Image();
		this.img_buyao = t;
		t.anchorOffsetY = 0;
		t.height = 260;
		t.source = "do_not_click-text1_png";
		t.visible = false;
		t.x = 135;
		t.y = 429;
		return t;
	};
	_proto.img_buneng_i = function () {
		var t = new eui.Image();
		this.img_buneng = t;
		t.anchorOffsetY = 0;
		t.height = 265;
		t.horizontalCenter = 0;
		t.source = "can_not_click-text1_png";
		t.visible = false;
		t.y = 423;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new game.ScaleButton();
		this.btn_close = t;
		t.label = "";
		t.x = 532;
		t.y = 305;
		t.skinName = HumorSkin$Skin4;
		return t;
	};
	_proto._ScaleButton2_i = function () {
		var t = new game.ScaleButton();
		t.height = 69;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 210;
		t.y = 714;
		t.skinName = HumorSkin$Skin5;
		return t;
	};
	_proto.edit_text_i = function () {
		var t = new eui.EditableText();
		this.edit_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 275.76;
		t.text = "";
		t.width = 403.03;
		t.x = 118;
		t.y = 418;
		return t;
	};
	_proto.btn_port_i = function () {
		var t = new game.ScaleButton();
		this.btn_port = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.66;
		t.label = "";
		t.scaleX = 1.1;
		t.scaleY = 1.2;
		t.width = 54.18;
		t.x = 525.35;
		t.y = 314.77;
		t.skinName = HumorSkin$Skin6;
		return t;
	};
	return HumorSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/menu/MenuSkin.exml'] = window.gameSkin.MenuSkin = (function (_super) {
	__extends(MenuSkin, _super);
	var MenuSkin$Skin7 = 	(function (_super) {
		__extends(MenuSkin$Skin7, _super);
		function MenuSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","common_json.btn_rank")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.visible = true;
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 41;
			t.source = "common_json.btn_rank";
			t.width = 47;
			t.x = 19.67;
			t.y = 21;
			return t;
		};
		return MenuSkin$Skin7;
	})(eui.Skin);

	var MenuSkin$Skin8 = 	(function (_super) {
		__extends(MenuSkin$Skin8, _super);
		function MenuSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.gamestart";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MenuSkin$Skin8;
	})(eui.Skin);

	var MenuSkin$Skin9 = 	(function (_super) {
		__extends(MenuSkin$Skin9, _super);
		function MenuSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.contactus";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MenuSkin$Skin9;
	})(eui.Skin);

	var MenuSkin$Skin10 = 	(function (_super) {
		__extends(MenuSkin$Skin10, _super);
		function MenuSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 3;
			t.strokeColor = 0xa57521;
			t.text = "发起挑战";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 187.33;
			return t;
		};
		return MenuSkin$Skin10;
	})(eui.Skin);

	var MenuSkin$Skin11 = 	(function (_super) {
		__extends(MenuSkin$Skin11, _super);
		function MenuSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.width = 93;
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MenuSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 42.67;
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "商店";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 77.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return MenuSkin$Skin11;
	})(eui.Skin);

	function MenuSkin() {
		_super.call(this);
		this.skinParts = ["btn_rank","btn_start","btn_continue","btn_fight","grp_dw","btn_shop","DiamondText","GoldText"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.btn_rank_i(),this._SetView1_i(),this.grp_dw_i(),this.btn_shop_i(),this._Image2_i(),this._Image3_i(),this.DiamondText_i(),this.GoldText_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
	}
	var _proto = MenuSkin.prototype;

	_proto.btn_rank_i = function () {
		var t = new game.ScaleButton();
		this.btn_rank = t;
		t.bottom = 77;
		t.height = 89;
		t.label = "";
		t.width = 86;
		t.x = 495;
		t.y = 980;
		t.skinName = MenuSkin$Skin7;
		return t;
	};
	_proto._SetView1_i = function () {
		var t = new game.SetView();
		t.bottom = 77;
		t.x = 56;
		t.y = 830;
		return t;
	};
	_proto.grp_dw_i = function () {
		var t = new eui.Group();
		this.grp_dw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 580;
		t.width = 318.18;
		t.x = 161;
		t.y = 244;
		t.elementsContent = [this.btn_start_i(),this.btn_continue_i(),this._Image1_i(),this.btn_fight_i()];
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new game.ScaleButton();
		this.btn_start = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 318;
		t.horizontalCenter = 0.4099999999999966;
		t.scaleX = 1;
		t.scaleY = 1;
		t.useImageSize = true;
		t.x = 9;
		t.y = 166.00000000000006;
		t.skinName = MenuSkin$Skin8;
		return t;
	};
	_proto.btn_continue_i = function () {
		var t = new game.ScaleButton();
		this.btn_continue = t;
		t.bottom = 162;
		t.horizontalCenter = 0.4099999999999966;
		t.scaleX = 1;
		t.scaleY = 1;
		t.useImageSize = true;
		t.x = 9;
		t.y = 324;
		t.skinName = MenuSkin$Skin9;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 6;
		t.horizontalCenter = 0.4099999999999966;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.do_not_click";
		t.x = 6;
		t.y = 453;
		return t;
	};
	_proto.btn_fight_i = function () {
		var t = new game.ScaleButton();
		this.btn_fight = t;
		t.height = 97;
		t.horizontalCenter = 0;
		t.label = "";
		t.visible = false;
		t.width = 301;
		t.y = 0;
		t.skinName = MenuSkin$Skin10;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new game.ScaleButton();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 77;
		t.height = 93.55;
		t.label = "商店";
		t.visible = false;
		t.width = 90.55;
		t.x = 277.5;
		t.y = 970;
		t.skinName = MenuSkin$Skin11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "common_json.diamond_png";
		t.visible = false;
		t.x = 22;
		t.y = 23;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.source = "common_json.golg_png";
		t.visible = false;
		t.width = 45;
		t.x = 24;
		t.y = 85;
		return t;
	};
	_proto.DiamondText_i = function () {
		var t = new eui.BitmapLabel();
		this.DiamondText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "keyNum_fnt";
		t.height = 51.43;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 261.86;
		t.x = 80.85;
		t.y = 28;
		return t;
	};
	_proto.GoldText_i = function () {
		var t = new eui.BitmapLabel();
		this.GoldText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "keyNum_fnt";
		t.height = 57.14;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 266.14;
		t.x = 80.85;
		t.y = 87;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 27@3x";
		t.x = 56;
		t.y = 534;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 15@3x";
		t.x = 495;
		t.y = 613;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 23@3x";
		t.x = 353.18;
		t.y = 824;
		return t;
	};
	return MenuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/msg/msgSkin.exml'] = window.gameSkin.msgSkin = (function (_super) {
	__extends(msgSkin, _super);
	var msgSkin$Skin12 = 	(function (_super) {
		__extends(msgSkin$Skin12, _super);
		function msgSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.key_bg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = msgSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return msgSkin$Skin12;
	})(eui.Skin);

	function msgSkin() {
		_super.call(this);
		this.skinParts = ["btn_close","msg_txt"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = msgSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 273;
		t.horizontalCenter = 0;
		t.width = 544;
		t.y = 449;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.msg_txt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 273;
		t.scale9Grid = new egret.Rectangle(14,14,85,85);
		t.source = "common_json.shop_bj";
		t.width = 544;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new game.ScaleButton();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.width = 141;
		t.y = 205;
		t.skinName = msgSkin$Skin12;
		return t;
	};
	_proto.msg_txt_i = function () {
		var t = new eui.Label();
		this.msg_txt = t;
		t.anchorOffsetX = 0;
		t.height = 82;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xba6f09;
		t.verticalAlign = "middle";
		t.width = 402;
		t.y = 54.5;
		return t;
	};
	return msgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/main/BorderSkin.exml'] = window.gameSkin.BorderSkin = (function (_super) {
	__extends(BorderSkin, _super);
	function BorderSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Image7_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this._Image5_i();
		
		this._Image6_i();
		
		this.states = [
			new eui.State ("leftTopMax",
				[
					new eui.AddItems("_Image5","",2,"_Image7"),
					new eui.SetProperty("_Image5","x",15),
					new eui.SetProperty("_Image5","y",15),
					new eui.SetProperty("_Image5","rotation",359.91),
					new eui.SetProperty("_Image7","x",25),
					new eui.SetProperty("_Image7","y",25)
				])
			,
			new eui.State ("leftTopMin",
				[
					new eui.AddItems("_Image6","",2,"_Image7"),
					new eui.SetProperty("_Image5","x",29),
					new eui.SetProperty("_Image5","y",27),
					new eui.SetProperty("_Image5","rotation",180),
					new eui.SetProperty("_Image5","scaleX",0.5),
					new eui.SetProperty("_Image5","scaleY",0.5),
					new eui.SetProperty("_Image7","x",25),
					new eui.SetProperty("_Image7","y",25)
				])
			,
			new eui.State ("top",
				[
					new eui.AddItems("_Image4","",2,"_Image7"),
					new eui.SetProperty("_Image4","rotation",0.17),
					new eui.SetProperty("_Image4","x",0),
					new eui.SetProperty("_Image4","y",25),
					new eui.SetProperty("_Image4","width",52),
					new eui.SetProperty("_Image5","y",-25)
				])
			,
			new eui.State ("rightTopMax",
				[
					new eui.AddItems("_Image5","",2,"_Image7"),
					new eui.SetProperty("_Image5","y",15.2),
					new eui.SetProperty("_Image5","x",35),
					new eui.SetProperty("_Image5","rotation",90.14)
				])
			,
			new eui.State ("left",
				[
					new eui.AddItems("_Image4","",2,"_Image7"),
					new eui.SetProperty("_Image4","x",25),
					new eui.SetProperty("_Image4","rotation",269.88),
					new eui.SetProperty("_Image4","y",50),
					new eui.SetProperty("_Image4","width",52),
					new eui.SetProperty("_Image5","x",-25)
				])
			,
			new eui.State ("right",
				[
					new eui.AddItems("_Image4","",2,"_Image7"),
					new eui.SetProperty("_Image4","x",15.2),
					new eui.SetProperty("_Image4","rotation",270.01),
					new eui.SetProperty("_Image4","y",50),
					new eui.SetProperty("_Image4","width",52),
					new eui.SetProperty("_Image5","x",25)
				])
			,
			new eui.State ("leftBottomMax",
				[
					new eui.AddItems("_Image5","",2,"_Image7"),
					new eui.SetProperty("_Image5","x",15),
					new eui.SetProperty("_Image5","y",35),
					new eui.SetProperty("_Image5","rotation",270.06)
				])
			,
			new eui.State ("bottom",
				[
					new eui.AddItems("_Image4","",2,"_Image7"),
					new eui.SetProperty("_Image4","rotation",180.03),
					new eui.SetProperty("_Image4","y",25.3),
					new eui.SetProperty("_Image4","x",50),
					new eui.SetProperty("_Image4","width",52),
					new eui.SetProperty("_Image5","y",25)
				])
			,
			new eui.State ("rightBottomMax",
				[
					new eui.AddItems("_Image5","",2,"_Image7"),
					new eui.SetProperty("_Image4","x",25),
					new eui.SetProperty("_Image4","y",0),
					new eui.SetProperty("_Image5","x",35),
					new eui.SetProperty("_Image5","y",35),
					new eui.SetProperty("_Image5","rotation",179.95)
				])
			,
			new eui.State ("rightTopMin",
				[
					new eui.AddItems("_Image3","",2,"_Image7")
				])
			,
			new eui.State ("leftBottomMin",
				[
					new eui.AddItems("_Image2","",2,"_Image7")
				])
			,
			new eui.State ("rightBottomMin",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = BorderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.rotation = 359.94;
		t.source = "common_json.map_stro_min";
		t.x = 24.8;
		t.y = 25;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.rotation = 90;
		t.source = "common_json.map_stro_min";
		t.x = 25.2;
		t.y = 25;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.rotation = 269.8;
		t.source = "common_json.map_stro_min";
		t.x = 24.3;
		t.y = 25.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.source = "common_json.map_stro_line";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.source = "common_json.map_stro_horn";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.rotation = 179.62;
		t.source = "common_json.map_stro_min";
		t.x = 25.2;
		t.y = 25;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.source = "common_json.wood_1";
		t.visible = false;
		return t;
	};
	return BorderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/main/MainSkin.exml'] = window.gameSkin.MainSkin = (function (_super) {
	__extends(MainSkin, _super);
	var MainSkin$Skin13 = 	(function (_super) {
		__extends(MainSkin$Skin13, _super);
		function MainSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.return_port-btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSkin$Skin13;
	})(eui.Skin);

	var MainSkin$Skin14 = 	(function (_super) {
		__extends(MainSkin$Skin14, _super);
		function MainSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 98;
			t.width = 223;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.key";
			t.x = 43.5;
			t.y = 18.5;
			return t;
		};
		return MainSkin$Skin14;
	})(eui.Skin);

	var MainSkin$Skin15 = 	(function (_super) {
		__extends(MainSkin$Skin15, _super);
		function MainSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","common_json.btn_again")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 64.29;
			t.scaleX = 0.7;
			t.scaleY = 0.7;
			t.source = "common_json.btn_again";
			t.width = 70;
			t.x = 20.5;
			t.y = 19.5;
			return t;
		};
		return MainSkin$Skin15;
	})(eui.Skin);

	function MainSkin() {
		_super.call(this);
		this.skinParts = ["map","grp_mood","btn_menu","img_starbg","starnum","map_rect","btn_key","keynum","btn_refresh","btn_setup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.map_i(),this.grp_mood_i(),this.btn_menu_i(),this.img_starbg_i(),this.starnum_i(),this.map_rect_i(),this.btn_key_i(),this.keynum_i(),this.btn_refresh_i(),this.btn_setup_i()];
	}
	var _proto = MainSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 26@3x";
		t.x = 182;
		t.y = 590;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.horizontalCenter = -0.5;
		t.scale9Grid = new egret.Rectangle(10,10,10,10);
		t.source = "common_json.woods_bg";
		t.width = 635;
		t.y = 694;
		return t;
	};
	_proto.map_i = function () {
		var t = new game.MapMainItem();
		this.map = t;
		t.x = 320;
		t.y = 290;
		return t;
	};
	_proto.grp_mood_i = function () {
		var t = new eui.Group();
		this.grp_mood = t;
		t.height = 1136;
		t.width = 640;
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new game.ScaleButton();
		this.btn_menu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "";
		t.width = 86;
		t.x = 60;
		t.y = 77;
		t.skinName = MainSkin$Skin13;
		return t;
	};
	_proto.img_starbg_i = function () {
		var t = new eui.Image();
		this.img_starbg = t;
		t.height = 85;
		t.source = "common_json.starnum_bg";
		t.width = 212;
		t.x = 367;
		t.y = 76;
		return t;
	};
	_proto.starnum_i = function () {
		var t = new eui.BitmapLabel();
		this.starnum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "porStarNum_fnt";
		t.height = 31;
		t.text = "100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 96;
		t.x = 455;
		t.y = 104;
		return t;
	};
	_proto.map_rect_i = function () {
		var t = new eui.Rect();
		this.map_rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 486;
		t.strokeAlpha = 1;
		t.width = 636;
		t.x = 2;
		t.y = 168.5;
		return t;
	};
	_proto.btn_key_i = function () {
		var t = new game.ScaleButton();
		this.btn_key = t;
		t.height = 98;
		t.label = "";
		t.width = 223;
		t.x = 209;
		t.y = 975;
		t.skinName = MainSkin$Skin14;
		return t;
	};
	_proto.keynum_i = function () {
		var t = new eui.BitmapLabel();
		this.keynum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "keyNum_fnt";
		t.height = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 96;
		t.x = 100;
		return t;
	};
	_proto.btn_refresh_i = function () {
		var t = new game.ScaleButton();
		this.btn_refresh = t;
		t.height = 90;
		t.label = "";
		t.width = 86;
		t.x = 495;
		t.y = 979;
		t.skinName = MainSkin$Skin15;
		return t;
	};
	_proto.btn_setup_i = function () {
		var t = new game.SetView();
		this.btn_setup = t;
		t.width = 86;
		t.x = 62;
		t.y = 830;
		return t;
	};
	return MainSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/main/MapSkin.exml'] = window.gameSkin.MapSkin = (function (_super) {
	__extends(MapSkin, _super);
	function MapSkin() {
		_super.call(this);
		this.skinParts = [];
		
	}
	var _proto = MapSkin.prototype;

	return MapSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/pklose/PkLoseSkin.exml'] = window.gameSkin.PkLoseSkin = (function (_super) {
	__extends(PkLoseSkin, _super);
	function PkLoseSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._ScaleButton1_i()];
	}
	var _proto = PkLoseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_frame_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._ScaleButton1_i = function () {
		var t = new game.ScaleButton();
		t.label = "Button";
		t.x = 103.15;
		t.y = 910.45;
		return t;
	};
	return PkLoseSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/pkmain/PKMainSkin.exml'] = window.gameSkin.PKMainSkin = (function (_super) {
	__extends(PKMainSkin, _super);
	var PKMainSkin$Skin16 = 	(function (_super) {
		__extends(PKMainSkin$Skin16, _super);
		function PKMainSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PKMainSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.return_port-btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PKMainSkin$Skin16;
	})(eui.Skin);

	var PKMainSkin$Skin17 = 	(function (_super) {
		__extends(PKMainSkin$Skin17, _super);
		function PKMainSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PKMainSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 98;
			t.width = 223;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.key";
			t.x = 26.5;
			t.y = 5;
			return t;
		};
		return PKMainSkin$Skin17;
	})(eui.Skin);

	var PKMainSkin$Skin18 = 	(function (_super) {
		__extends(PKMainSkin$Skin18, _super);
		function PKMainSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.time_bg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PKMainSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.time_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "common_json.minus_time_png";
			t.x = 29;
			t.y = 37;
			return t;
		};
		return PKMainSkin$Skin18;
	})(eui.Skin);

	var PKMainSkin$Skin19 = 	(function (_super) {
		__extends(PKMainSkin$Skin19, _super);
		function PKMainSkin$Skin19() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.time_bg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PKMainSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.time_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "common_json.add_time_png";
			t.x = 29;
			t.y = 35;
			return t;
		};
		return PKMainSkin$Skin19;
	})(eui.Skin);

	function PKMainSkin() {
		_super.call(this);
		this.skinParts = ["map","grp_mood","btn_menu","map_rect","btn_key","keynum","gamerSituation_label","timebar","btn_tool_other","btn_tool_addtime","addTime_Num","reduceTime_Num","gamer_list","btn_refresh","animationGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.map_i(),this.grp_mood_i(),this.btn_menu_i(),this.map_rect_i(),this.btn_key_i(),this.keynum_i(),this.gamerSituation_label_i(),this.timebar_i(),this.btn_tool_other_i(),this.btn_tool_addtime_i(),this.addTime_Num_i(),this.reduceTime_Num_i(),this._Scroller1_i(),this.btn_refresh_i(),this.animationGroup_i()];
	}
	var _proto = PKMainSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 17@3x";
		t.x = 456;
		t.y = 804;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 14@3x";
		t.x = 133;
		t.y = 739;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(10,10,10,10);
		t.source = "common_json.woods_bg";
		t.width = 634;
		t.y = 694;
		return t;
	};
	_proto.map_i = function () {
		var t = new game.MapMainItem();
		this.map = t;
		t.x = 320;
		t.y = 290;
		return t;
	};
	_proto.grp_mood_i = function () {
		var t = new eui.Group();
		this.grp_mood = t;
		t.height = 1136;
		t.width = 640;
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new game.ScaleButton();
		this.btn_menu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "";
		t.visible = false;
		t.width = 86;
		t.x = 46;
		t.y = 26;
		t.skinName = PKMainSkin$Skin16;
		return t;
	};
	_proto.map_rect_i = function () {
		var t = new eui.Rect();
		this.map_rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 486;
		t.strokeAlpha = 1;
		t.width = 636;
		t.x = 0;
		t.y = 168;
		return t;
	};
	_proto.btn_key_i = function () {
		var t = new game.ScaleButton();
		this.btn_key = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.label = "";
		t.visible = false;
		t.width = 203;
		t.x = 206;
		t.y = 1009;
		t.skinName = PKMainSkin$Skin17;
		return t;
	};
	_proto.keynum_i = function () {
		var t = new eui.BitmapLabel();
		this.keynum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "keyNum_fnt";
		t.height = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 96;
		t.x = 288;
		t.y = 1025;
		return t;
	};
	_proto.gamerSituation_label_i = function () {
		var t = new eui.Label();
		this.gamerSituation_label = t;
		t.size = 25;
		t.text = "Label";
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 156;
		return t;
	};
	_proto.timebar_i = function () {
		var t = new eui.BitmapLabel();
		this.timebar = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 34;
		t.font = "CountDown_fnt";
		t.height = 68;
		t.rotation = 359.2;
		t.text = "50";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 524;
		t.y = 76;
		return t;
	};
	_proto.btn_tool_other_i = function () {
		var t = new game.ScaleButton();
		this.btn_tool_other = t;
		t.height = 132;
		t.label = "";
		t.width = 119;
		t.x = 478;
		t.y = 959;
		t.skinName = PKMainSkin$Skin18;
		return t;
	};
	_proto.btn_tool_addtime_i = function () {
		var t = new game.ScaleButton();
		this.btn_tool_addtime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132;
		t.label = "";
		t.width = 119;
		t.x = 40;
		t.y = 959;
		t.skinName = PKMainSkin$Skin19;
		return t;
	};
	_proto.addTime_Num_i = function () {
		var t = new eui.BitmapLabel();
		this.addTime_Num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 27.5;
		t.horizontalCenter = -223;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "25";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 60;
		t.y = 1056;
		return t;
	};
	_proto.reduceTime_Num_i = function () {
		var t = new eui.BitmapLabel();
		this.reduceTime_Num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 29.17;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "12";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 58.83;
		t.x = 501;
		t.y = 1055;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 420;
		t.x = 0;
		t.y = 14;
		t.viewport = this.gamer_list_i();
		return t;
	};
	_proto.gamer_list_i = function () {
		var t = new eui.List();
		this.gamer_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.itemRendererSkinName = gameSkin.GamerInfo;
		t.width = 420;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btn_refresh_i = function () {
		var t = new game.ScaleButton();
		this.btn_refresh = t;
		t.label = "Button";
		t.visible = false;
		t.x = 221;
		t.y = 945;
		return t;
	};
	_proto.animationGroup_i = function () {
		var t = new eui.Group();
		this.animationGroup = t;
		t.anchorOffsetX = 214;
		t.anchorOffsetY = 115;
		t.height = 231;
		t.visible = false;
		t.width = 429;
		t.x = 321;
		t.y = 553;
		return t;
	};
	return PKMainSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/pkmain/item/GamerInfo.exml'] = window.gameSkin.GamerInfo = (function (_super) {
	__extends(GamerInfo, _super);
	function GamerInfo() {
		_super.call(this);
		this.skinParts = ["headImg_bg","headImg","gamer_name","animationGroup"];
		
		this.height = 130;
		this.width = 90;
		this.elementsContent = [this.headImg_bg_i(),this._Image1_i(),this.headImg_i(),this.gamer_name_i(),this.animationGroup_i()];
	}
	var _proto = GamerInfo.prototype;

	_proto.headImg_bg_i = function () {
		var t = new eui.Rect();
		this.headImg_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xF7F4F4;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.headImg_bg_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 82;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto.gamer_name_i = function () {
		var t = new eui.Label();
		this.gamer_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf2a93c;
		t.verticalAlign = "middle";
		t.width = 90;
		t.x = 0;
		t.y = 90;
		return t;
	};
	_proto.animationGroup_i = function () {
		var t = new eui.Group();
		this.animationGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.width = 90;
		t.x = 0;
		t.y = 12;
		return t;
	};
	return GamerInfo;
})(eui.Skin);generateEUI.paths['resource/skins/modules/pkwin/PKWinSkin.exml'] = window.gameSkin.PKWinSkin = (function (_super) {
	__extends(PKWinSkin, _super);
	var PKWinSkin$Skin20 = 	(function (_super) {
		__extends(PKWinSkin$Skin20, _super);
		function PKWinSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PKWinSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 35;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "查看排行";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 187.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return PKWinSkin$Skin20;
	})(eui.Skin);

	var PKWinSkin$Skin21 = 	(function (_super) {
		__extends(PKWinSkin$Skin21, _super);
		function PKWinSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.key_bg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PKWinSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 35;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "再来一局";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 187.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return PKWinSkin$Skin21;
	})(eui.Skin);

	var PKWinSkin$Skin22 = 	(function (_super) {
		__extends(PKWinSkin$Skin22, _super);
		function PKWinSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.key_bg")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","common_json.key_bg")
					])
			];
		}
		var _proto = PKWinSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 35;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "离开";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 187.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return PKWinSkin$Skin22;
	})(eui.Skin);

	function PKWinSkin() {
		_super.call(this);
		this.skinParts = ["btn_headImg","btn_time","btn_score","btn_gold","btn_gold1","btn_lookRank","gamerInfo","countDown_num","countDown_txt","group_countDown","group_pkNRank","btn_more","btn_leave","balance_rank","balance_scroller","group_pklevel"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this.group_pkNRank_i(),this.group_pklevel_i()];
	}
	var _proto = PKWinSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 690.63;
		t.horizontalCenter = -0.5;
		t.rotation = 359.92;
		t.source = "bg_frame_png";
		t.width = 593.89;
		t.y = 145.75;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.bold = true;
		t.borderColor = 0x000000;
		t.fontFamily = "SimHei";
		t.height = 52.67;
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x038208;
		t.text = "对战结算";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 187.33;
		t.y = 162.66;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 75.45;
		t.horizontalCenter = -0.5;
		t.size = 55;
		t.text = "对战结算";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 251.27;
		t.y = 153.61;
		return t;
	};
	_proto.group_pkNRank_i = function () {
		var t = new eui.Group();
		this.group_pkNRank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1134;
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label3_i(),this.btn_headImg_i(),this.btn_time_i(),this.btn_score_i(),this._Image2_i(),this.btn_gold_i(),this.btn_gold1_i(),this._Image3_i(),this.btn_lookRank_i(),this.gamerInfo_i(),this.group_countDown_i(),this._Label4_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "胜利结算";
		t.visible = false;
		t.width = 120;
		t.y = 63;
		return t;
	};
	_proto.btn_headImg_i = function () {
		var t = new eui.Image();
		this.btn_headImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.key_bg";
		t.visible = false;
		t.width = 110;
		t.y = 227.73;
		return t;
	};
	_proto.btn_time_i = function () {
		var t = new eui.Label();
		this.btn_time = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0xf7c165;
		t.visible = false;
		t.x = 123.65;
		t.y = 373.73;
		return t;
	};
	_proto.btn_score_i = function () {
		var t = new eui.Label();
		this.btn_score = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0xedc171;
		t.visible = false;
		t.x = 124.21;
		t.y = 457.73;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,14,85,85);
		t.source = "common_json.shop_bj";
		t.width = 399.67;
		t.y = 300.06;
		return t;
	};
	_proto.btn_gold_i = function () {
		var t = new eui.Label();
		this.btn_gold = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "";
		t.textColor = 0xf7af62;
		t.y = 552.16;
		return t;
	};
	_proto.btn_gold1_i = function () {
		var t = new eui.BitmapLabel();
		this.btn_gold1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopBuyNum_fnt";
		t.height = 86.67;
		t.horizontalCenter = -0.5;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.text = "";
		t.width = 13.34;
		t.y = 541.51;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.76;
		t.horizontalCenter = 0;
		t.source = "common_json.wintext";
		t.visible = false;
		t.width = 188.91;
		t.y = 564.35;
		return t;
	};
	_proto.btn_lookRank_i = function () {
		var t = new game.ScaleButton();
		this.btn_lookRank = t;
		t.anchorOffsetY = 0;
		t.height = 79.47;
		t.label = "查看排行";
		t.visible = false;
		t.width = 223;
		t.x = 210.33;
		t.y = 659.95;
		t.skinName = PKWinSkin$Skin20;
		return t;
	};
	_proto.gamerInfo_i = function () {
		var t = new game.GamerInfo();
		this.gamerInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.25;
		t.scaleY = 1.25;
		t.skinName = "gameSkin.GamerInfo";
		t.width = 92;
		t.y = 339.01;
		return t;
	};
	_proto.group_countDown_i = function () {
		var t = new eui.Group();
		this.group_countDown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 467;
		t.y = 670.67;
		t.elementsContent = [this.countDown_num_i(),this.countDown_txt_i()];
		return t;
	};
	_proto.countDown_num_i = function () {
		var t = new eui.BitmapLabel();
		this.countDown_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 46;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 68;
		t.x = 279.16;
		t.y = 2;
		return t;
	};
	_proto.countDown_txt_i = function () {
		var t = new eui.Label();
		this.countDown_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x1e0303;
		t.verticalAlign = "middle";
		t.width = 230;
		t.x = 38.08;
		t.y = 8.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.bold = true;
		t.borderColor = 0x000000;
		t.fontFamily = "SimHei";
		t.height = 52.67;
		t.size = 45;
		t.stroke = 4;
		t.strokeColor = 0x038208;
		t.text = "用户登录";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 187.33;
		t.x = 223;
		t.y = 162.66;
		return t;
	};
	_proto.group_pklevel_i = function () {
		var t = new eui.Group();
		this.group_pklevel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1135;
		t.horizontalCenter = -1.5;
		t.width = 639;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.btn_more_i(),this.btn_leave_i(),this.balance_scroller_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 339.31;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(6,6,38,38);
		t.source = "common_json.map_bg";
		t.width = 443.91;
		t.y = 308.73;
		return t;
	};
	_proto.btn_more_i = function () {
		var t = new game.ScaleButton();
		this.btn_more = t;
		t.anchorOffsetX = 78.07;
		t.anchorOffsetY = 16.55;
		t.height = 73;
		t.label = "再来一局";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 149;
		t.width = 177.67;
		t.x = 434.77;
		t.skinName = PKWinSkin$Skin21;
		return t;
	};
	_proto.btn_leave_i = function () {
		var t = new game.ScaleButton();
		this.btn_leave = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.label = "离开";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 149;
		t.width = 181.66;
		t.x = 108.96;
		t.skinName = PKWinSkin$Skin22;
		return t;
	};
	_proto.balance_scroller_i = function () {
		var t = new eui.Scroller();
		this.balance_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 281.39;
		t.horizontalCenter = 0;
		t.width = 417.16;
		t.y = 364.22;
		t.viewport = this.balance_rank_i();
		return t;
	};
	_proto.balance_rank_i = function () {
		var t = new eui.List();
		this.balance_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 282.91;
		t.itemRendererSkinName = gameSkin.PKRankItemSkin;
		t.width = 418.67;
		t.x = -0.5;
		t.y = -5.64;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.text = "Rank";
		t.textColor = 0xff8e00;
		t.x = 215.85;
		t.y = 335.01;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.text = "Time";
		t.textColor = 0xff8300;
		t.x = 287.81;
		t.y = 335.01;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.text = "Gold";
		t.textColor = 0xff8800;
		t.x = 362.28;
		t.y = 335.01;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.style = "labelStroke";
		t.anchorOffsetX = 0;
		t.text = "Level";
		t.textColor = 0xff8300;
		t.width = 75;
		t.x = 436;
		t.y = 335.01;
		return t;
	};
	return PKWinSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/port/PortSkin.exml'] = window.gameSkin.PortSkin = (function (_super) {
	__extends(PortSkin, _super);
	var PortSkin$Skin23 = 	(function (_super) {
		__extends(PortSkin$Skin23, _super);
		function PortSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PortSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.return_port-btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PortSkin$Skin23;
	})(eui.Skin);

	var PortSkin$Skin24 = 	(function (_super) {
		__extends(PortSkin$Skin24, _super);
		function PortSkin$Skin24() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PortSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		return PortSkin$Skin24;
	})(eui.Skin);

	var PortSkin$Skin25 = 	(function (_super) {
		__extends(PortSkin$Skin25, _super);
		function PortSkin$Skin25() {
			_super.call(this);
			this.skinParts = [];
			
		}
		var _proto = PortSkin$Skin25.prototype;

		return PortSkin$Skin25;
	})(eui.Skin);

	function PortSkin() {
		_super.call(this);
		this.skinParts = ["btn_exit","img_star","bml_starNum","btn_back","list_port","sc_port","grp_bj"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._HScrollBar1_i(),this.btn_exit_i(),this.img_star_i(),this.bml_starNum_i(),this.grp_bj_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
	}
	var _proto = PortSkin.prototype;

	_proto._HScrollBar1_i = function () {
		var t = new eui.HScrollBar();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.width = 161.33;
		t.x = 239.34;
		t.y = 746.67;
		return t;
	};
	_proto.btn_exit_i = function () {
		var t = new game.ScaleButton();
		this.btn_exit = t;
		t.height = 90;
		t.label = "";
		t.width = 86;
		t.x = 60;
		t.y = 77;
		t.skinName = PortSkin$Skin23;
		return t;
	};
	_proto.img_star_i = function () {
		var t = new eui.Image();
		this.img_star = t;
		t.source = "common_json.starnum_bg";
		t.top = 76;
		t.x = 367;
		t.y = 76;
		return t;
	};
	_proto.bml_starNum_i = function () {
		var t = new eui.BitmapLabel();
		this.bml_starNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "porStarNum_fnt";
		t.height = 36;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 98;
		t.x = 455;
		t.y = 102;
		return t;
	};
	_proto.grp_bj_i = function () {
		var t = new eui.Group();
		this.grp_bj = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 568;
		t.horizontalCenter = 0;
		t.top = 251;
		t.width = 550;
		t.y = 272;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_back_i(),this.sc_port_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 550;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_frame_png";
		t.width = 522;
		t.x = 14.17;
		t.y = 7.08;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.portext";
		t.x = 233.36;
		t.y = 15.389999999999986;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new game.ScaleButton();
		this.btn_back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.6;
		t.label = "";
		t.width = 58.8;
		t.x = 488;
		t.y = 38;
		t.skinName = PortSkin$Skin24;
		return t;
	};
	_proto.sc_port_i = function () {
		var t = new eui.Scroller();
		this.sc_port = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 396;
		t.horizontalCenter = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 448;
		t.x = 58.99999999999999;
		t.y = 117.58;
		t.skinName = PortSkin$Skin25;
		t.viewport = this.list_port_i();
		return t;
	};
	_proto.list_port_i = function () {
		var t = new eui.List();
		this.list_port = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 396;
		t.itemRendererSkinName = gameSkin.PortBtnItemSkin;
		t.width = 448;
		t.x = -1.52;
		t.y = 4;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 5;
		t.orientation = "rows";
		t.verticalGap = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 24@3x";
		t.x = 492.5;
		t.y = 887.79;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 25@3x";
		t.x = 190.36;
		t.y = 998.06;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 23@3x";
		t.x = 83;
		t.y = 837.79;
		return t;
	};
	return PortSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/rank/RankItemSkin.exml'] = window.gameSkin.RankItemSkin = (function (_super) {
	__extends(RankItemSkin, _super);
	function RankItemSkin() {
		_super.call(this);
		this.skinParts = ["txt_rank","txt_starNum"];
		
		this.height = 100;
		this.width = 380;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.txt_rank_i(),this.txt_starNum_i()];
	}
	var _proto = RankItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(12,14,54,61);
		t.source = "common_json.por_num_bg";
		t.width = 359;
		t.x = 22;
		t.y = 6;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.01;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "common_json.rankstar";
		t.verticalCenter = 0;
		t.width = 106;
		t.x = 287;
		return t;
	};
	_proto.txt_rank_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "rank_fnt";
		t.height = 50.75;
		t.text = "123";
		t.textAlign = "conter";
		t.verticalAlign = "middle";
		t.verticalCenter = -2.5;
		t.width = 66.4;
		t.x = 56.5;
		return t;
	};
	_proto.txt_starNum_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_starNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "rankStar_fnt";
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "123";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		t.width = 112;
		t.x = 145.5;
		return t;
	};
	return RankItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/rank/RankSkin.exml'] = window.gameSkin.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	var RankSkin$Skin26 = 	(function (_super) {
		__extends(RankSkin$Skin26, _super);
		function RankSkin$Skin26() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		return RankSkin$Skin26;
	})(eui.Skin);

	function RankSkin() {
		_super.call(this);
		this.skinParts = ["comOne","goOne","btn_close","list_rank","sc_rank","group"];
		
		this.height = 1136;
		this.width = 640;
		this.comOne_i();
		this.goOne_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-639],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [639],[],this._Object4,"x");
	}
	var _proto = RankSkin.prototype;

	_proto.comOne_i = function () {
		var t = new egret.tween.TweenGroup();
		this.comOne = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.goOne_i = function () {
		var t = new egret.tween.TweenGroup();
		this.goOne = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.width = 639;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.sc_rank_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 552;
		t.horizontalCenter = 4.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_frame_png";
		t.verticalCenter = -13;
		t.width = 520;
		t.y = 89;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new game.ScaleButton();
		this.btn_close = t;
		t.height = 59;
		t.label = "";
		t.width = 58;
		t.x = 536;
		t.y = 315;
		t.skinName = RankSkin$Skin26;
		return t;
	};
	_proto.sc_rank_i = function () {
		var t = new eui.Scroller();
		this.sc_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 419;
		t.horizontalCenter = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 411;
		t.x = 73;
		t.y = 384.17;
		t.viewport = this.list_rank_i();
		return t;
	};
	_proto.list_rank_i = function () {
		var t = new eui.List();
		this.list_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 417;
		t.itemRendererSkinName = gameSkin.RankItemSkin;
		t.width = 411;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.horizontalCenter = 3;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "common_json.rank_word";
		t.width = 166;
		t.x = 172;
		t.y = 283;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/set/SetSkin.exml'] = window.gameSkin.SetSkin = (function (_super) {
	__extends(SetSkin, _super);
	var SetSkin$Skin27 = 	(function (_super) {
		__extends(SetSkin$Skin27, _super);
		function SetSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.set-btn";
			t.x = 19.59;
			t.y = 20.16;
			return t;
		};
		return SetSkin$Skin27;
	})(eui.Skin);

	function SetSkin() {
		_super.call(this);
		this.skinParts = ["img_music_off","grp_music","img_sound_off","grp_sound","grp_dialog","btn_set"];
		
		this.height = 238;
		this.width = 86;
		this.elementsContent = [this.grp_dialog_i(),this.btn_set_i()];
	}
	var _proto = SetSkin.prototype;

	_proto.grp_dialog_i = function () {
		var t = new eui.Group();
		this.grp_dialog = t;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.width = 86;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.grp_music_i(),this.grp_sound_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.set_bg";
		t.top = 0;
		t.x = 7;
		t.y = 0;
		return t;
	};
	_proto.grp_music_i = function () {
		var t = new eui.Group();
		this.grp_music = t;
		t.height = 48;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 79;
		t.width = 48;
		t.x = 20;
		t.y = 79;
		t.elementsContent = [this._Image2_i(),this.img_music_off_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.music_on";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.img_music_off_i = function () {
		var t = new eui.Image();
		this.img_music_off = t;
		t.horizontalCenter = 0;
		t.source = "common_json.offplay";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_sound_i = function () {
		var t = new eui.Group();
		this.grp_sound = t;
		t.height = 48;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 15;
		t.width = 48;
		t.x = 19;
		t.y = 15;
		t.elementsContent = [this._Image3_i(),this.img_sound_off_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "common_json.sound_on";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_sound_off_i = function () {
		var t = new eui.Image();
		this.img_sound_off = t;
		t.horizontalCenter = 0;
		t.source = "common_json.offplay";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_set_i = function () {
		var t = new game.ScaleButton();
		this.btn_set = t;
		t.height = 90;
		t.label = "";
		t.width = 86;
		t.x = 0;
		t.y = 148;
		t.skinName = SetSkin$Skin27;
		return t;
	};
	return SetSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/room/RoomSkin.exml'] = window.gameSkin.RoomSkin = (function (_super) {
	__extends(RoomSkin, _super);
	var RoomSkin$Skin28 = 	(function (_super) {
		__extends(RoomSkin$Skin28, _super);
		function RoomSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.create_room_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.create_room_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin28;
	})(eui.Skin);

	var RoomSkin$Skin29 = 	(function (_super) {
		__extends(RoomSkin$Skin29, _super);
		function RoomSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.width = 92.54;
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","button-bg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button-bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "加入";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 84.29;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return RoomSkin$Skin29;
	})(eui.Skin);

	var RoomSkin$Skin30 = 	(function (_super) {
		__extends(RoomSkin$Skin30, _super);
		function RoomSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.return_port-btn")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.return_port-btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin30;
	})(eui.Skin);

	var RoomSkin$Skin31 = 	(function (_super) {
		__extends(RoomSkin$Skin31, _super);
		function RoomSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["group2"];
			
			this.elementsContent = [this._Image1_i(),this.group2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","common_json.btn_rank")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.visible = true;
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.group2_i = function () {
			var t = new eui.Group();
			this.group2 = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 41;
			t.source = "common_json.btn_rank";
			t.width = 47;
			t.x = 19.67;
			t.y = 21;
			return t;
		};
		return RoomSkin$Skin31;
	})(eui.Skin);

	var RoomSkin$Skin32 = 	(function (_super) {
		__extends(RoomSkin$Skin32, _super);
		function RoomSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.style = "labelStroke";
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.backgroundColor = 0x000000;
			t.bold = true;
			t.borderColor = 0x000000;
			t.fontFamily = "SimHei";
			t.height = 52.67;
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 3;
			t.strokeColor = 0xA57521;
			t.text = "邀请好友";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.width = 187.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return RoomSkin$Skin32;
	})(eui.Skin);

	var RoomSkin$Skin33 = 	(function (_super) {
		__extends(RoomSkin$Skin33, _super);
		function RoomSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.grounding_blue_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.anchorOffsetX = -0.65;
			t.anchorOffsetY = -0.07;
			t.height = 41;
			t.size = 20;
			t.text = "";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.width = 53;
			t.x = 99.35;
			t.y = 38.93;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "common_json.add_time_png";
			t.x = 26;
			t.y = 38;
			return t;
		};
		return RoomSkin$Skin33;
	})(eui.Skin);

	var RoomSkin$Skin34 = 	(function (_super) {
		__extends(RoomSkin$Skin34, _super);
		function RoomSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.grounding_blue_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 42;
			t.horizontalCenter = 33;
			t.size = 20;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0.5;
			t.width = 55;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "common_json.minus_time_png";
			t.x = 26;
			t.y = 34;
			return t;
		};
		return RoomSkin$Skin34;
	})(eui.Skin);

	var RoomSkin$Skin35 = 	(function (_super) {
		__extends(RoomSkin$Skin35, _super);
		function RoomSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.star_game_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","common_json.star_game_g_png")
					])
			];
		}
		var _proto = RoomSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.star_game_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin35;
	})(eui.Skin);

	var RoomSkin$Skin36 = 	(function (_super) {
		__extends(RoomSkin$Skin36, _super);
		function RoomSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.dissolution_room_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.dissolution_room_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin36;
	})(eui.Skin);

	function RoomSkin() {
		_super.call(this);
		this.skinParts = ["create_show","matching_show","jion_room","text_roomID","btn_create","btn_join","group_create","btn_menu","btn_rank","btn_invite","show_roomID","btn_match","group_invite","group_create_room","gamer_list","sc_gamer","btn_strGame","btn_return","addTime_Num","reduceTime_Num","group_wait"];
		
		this.height = 1136;
		this.width = 640;
		this.create_show_i();
		this.matching_show_i();
		this.jion_room_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_create_room_i(),this.group_wait_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["hostComponent.group0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["hostComponent.group1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
	}
	var _proto = RoomSkin.prototype;

	_proto.create_show_i = function () {
		var t = new egret.tween.TweenGroup();
		this.create_show = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.matching_show_i = function () {
		var t = new egret.tween.TweenGroup();
		this.matching_show = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.jion_room_i = function () {
		var t = new egret.tween.TweenGroup();
		this.jion_room = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 18@3x";
		t.x = 244;
		t.y = 876;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ocean2_json.资源 16@3x";
		t.x = -20;
		t.y = 705;
		return t;
	};
	_proto.group_create_room_i = function () {
		var t = new eui.Group();
		this.group_create_room = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1135;
		t.width = 639;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.group_create_i(),this.btn_menu_i(),this.btn_rank_i(),this.group_invite_i()];
		return t;
	};
	_proto.group_create_i = function () {
		var t = new eui.Group();
		this.group_create = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.horizontalCenter = 0;
		t.width = 518;
		t.y = 258;
		t.elementsContent = [this.text_roomID_i(),this.btn_create_i(),this.btn_join_i()];
		return t;
	};
	_proto.text_roomID_i = function () {
		var t = new eui.EditableText();
		this.text_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xf49744;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 383;
		t.x = 114;
		t.y = 410;
		return t;
	};
	_proto.btn_create_i = function () {
		var t = new game.ScaleButton();
		this.btn_create = t;
		t.height = 97;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 302;
		t.x = 107;
		t.y = 161;
		t.skinName = RoomSkin$Skin28;
		return t;
	};
	_proto.btn_join_i = function () {
		var t = new game.ScaleButton();
		this.btn_join = t;
		t.height = 90;
		t.label = "加入";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 86;
		t.x = 41;
		t.y = 393.67;
		t.skinName = RoomSkin$Skin29;
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new game.ScaleButton();
		this.btn_menu = t;
		t.height = 90;
		t.label = "";
		t.width = 86;
		t.x = 68;
		t.y = 911;
		t.skinName = RoomSkin$Skin30;
		return t;
	};
	_proto.btn_rank_i = function () {
		var t = new game.ScaleButton();
		this.btn_rank = t;
		t.height = 89;
		t.label = "";
		t.width = 86;
		t.x = 503;
		t.y = 911;
		t.skinName = RoomSkin$Skin31;
		return t;
	};
	_proto.group_invite_i = function () {
		var t = new eui.Group();
		this.group_invite = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 528;
		t.visible = false;
		t.width = 518;
		t.x = 63;
		t.y = 259;
		t.elementsContent = [this.btn_invite_i(),this.show_roomID_i(),this.btn_match_i()];
		return t;
	};
	_proto.btn_invite_i = function () {
		var t = new game.ScaleButton();
		this.btn_invite = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100.45;
		t.horizontalCenter = -3;
		t.label = "邀请好友";
		t.width = 291.97;
		t.y = 89.5;
		t.skinName = RoomSkin$Skin32;
		return t;
	};
	_proto.show_roomID_i = function () {
		var t = new eui.EditableText();
		this.show_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xf79e4f;
		t.borderColor = 0x000000;
		t.height = 80;
		t.horizontalCenter = "-4";
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 488;
		t.y = 225;
		return t;
	};
	_proto.btn_match_i = function () {
		var t = new eui.Image();
		this.btn_match = t;
		t.horizontalCenter = 0;
		t.source = "common_json.match_room_png";
		t.y = 382.24;
		return t;
	};
	_proto.group_wait_i = function () {
		var t = new eui.Group();
		this.group_wait = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1134;
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._ScaleButton1_i(),this._ScaleButton2_i(),this.sc_gamer_i(),this.btn_strGame_i(),this.btn_return_i(),this.addTime_Num_i(),this.reduceTime_Num_i()];
		return t;
	};
	_proto._ScaleButton1_i = function () {
		var t = new game.ScaleButton();
		t.height = 121;
		t.label = "";
		t.width = 187;
		t.x = 30;
		t.y = 946.5;
		t.skinName = RoomSkin$Skin33;
		return t;
	};
	_proto._ScaleButton2_i = function () {
		var t = new game.ScaleButton();
		t.height = 121;
		t.label = "";
		t.width = 187;
		t.x = 390;
		t.y = 948.5;
		t.skinName = RoomSkin$Skin34;
		return t;
	};
	_proto.sc_gamer_i = function () {
		var t = new eui.Scroller();
		this.sc_gamer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 430;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "off";
		t.y = 215;
		t.viewport = this.gamer_list_i();
		return t;
	};
	_proto.gamer_list_i = function () {
		var t = new eui.List();
		this.gamer_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 286;
		t.itemRendererSkinName = gameSkin.GamerInfo;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 284;
		t.x = 99;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.columnWidth = 130;
		t.horizontalAlign = "center";
		t.horizontalGap = 20;
		t.orientation = "rows";
		t.rowAlign = "justifyUsingHeight";
		t.verticalAlign = "justify";
		t.verticalGap = 20;
		return t;
	};
	_proto.btn_strGame_i = function () {
		var t = new game.ScaleButton();
		this.btn_strGame = t;
		t.height = 97;
		t.label = "";
		t.visible = false;
		t.width = 301;
		t.x = 162.5;
		t.y = 687;
		t.skinName = RoomSkin$Skin35;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new game.ScaleButton();
		this.btn_return = t;
		t.height = 80;
		t.label = "";
		t.visible = false;
		t.width = 245;
		t.x = 187;
		t.y = 837;
		t.skinName = RoomSkin$Skin36;
		return t;
	};
	_proto.addTime_Num_i = function () {
		var t = new eui.BitmapLabel();
		this.addTime_Num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 31.66;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44.33;
		t.x = 126;
		t.y = 985;
		return t;
	};
	_proto.reduceTime_Num_i = function () {
		var t = new eui.BitmapLabel();
		this.reduceTime_Num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 31.67;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 45.33;
		t.x = 484;
		t.y = 986;
		return t;
	};
	return RoomSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/scene/SceneSkin.exml'] = window.gameSkin.SceneSkin = (function (_super) {
	__extends(SceneSkin, _super);
	function SceneSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = SceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_bg_png";
		t.top = 0;
		return t;
	};
	return SceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/test/DemoTest.exml'] = window.gameSkin.TestSkin = (function (_super) {
	__extends(TestSkin, _super);
	var TestSkin$Skin37 = 	(function (_super) {
		__extends(TestSkin$Skin37, _super);
		function TestSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","test_json.button_down")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TestSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(2,2,12,12);
			t.source = "test_json.button_up";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TestSkin$Skin37;
	})(eui.Skin);

	function TestSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this._Label1_i()];
	}
	var _proto = TestSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276;
		t.source = "test_json.thumb_pb";
		t.width = 412;
		t.x = 114;
		t.y = 172;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.width = 138;
		t.x = 226.5;
		t.y = 310;
		t.skinName = TestSkin$Skin37;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Label";
		t.x = 293;
		t.y = 246;
		return t;
	};
	return TestSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/test/TestSkin.exml'] = window.gameSkin.TestSkin = (function (_super) {
	__extends(TestSkin, _super);
	var TestSkin$Skin38 = 	(function (_super) {
		__extends(TestSkin$Skin38, _super);
		function TestSkin$Skin38() {
			_super.call(this);
			this.skinParts = [];
			
		}
		var _proto = TestSkin$Skin38.prototype;

		return TestSkin$Skin38;
	})(eui.Skin);

	function TestSkin() {
		_super.call(this);
		this.skinParts = ["btn_click","txt_label","list_item","item","itemcom"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_click_i(),this.txt_label_i(),this._Scroller1_i(),this.item_i(),this.itemcom_i()];
	}
	var _proto = TestSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276;
		t.source = "test_json.thumb_pb";
		t.width = 412;
		t.x = 114;
		t.y = 172;
		return t;
	};
	_proto.btn_click_i = function () {
		var t = new game.ScaleButton();
		this.btn_click = t;
		t.label = "点我";
		t.x = 204;
		t.y = 480;
		return t;
	};
	_proto.txt_label_i = function () {
		var t = new eui.Label();
		this.txt_label = t;
		t.text = "Label";
		t.x = 293;
		t.y = 246;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 384;
		t.width = 435;
		t.x = 0;
		t.y = 75;
		t.skinName = TestSkin$Skin38;
		t.viewport = this.list_item_i();
		return t;
	};
	_proto.list_item_i = function () {
		var t = new eui.List();
		this.list_item = t;
		t.anchorOffsetX = 0;
		t.width = 437;
		t.y = 321;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.item_i = function () {
		var t = new game.TestItem();
		this.item = t;
		t.x = 387;
		t.y = 299;
		return t;
	};
	_proto.itemcom_i = function () {
		var t = new game.TestComponent();
		this.itemcom = t;
		t.x = 543;
		t.y = 306;
		return t;
	};
	return TestSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/shop/ShopSkin.exml'] = window.gameSkin.ShopSkin = (function (_super) {
	__extends(ShopSkin, _super);
	var ShopSkin$Skin39 = 	(function (_super) {
		__extends(ShopSkin$Skin39, _super);
		function ShopSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin39;
	})(eui.Skin);

	var ShopSkin$Skin40 = 	(function (_super) {
		__extends(ShopSkin$Skin40, _super);
		function ShopSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 126;
			this.width = 138;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.shop_bj")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 130;
			t.scale9Grid = new egret.Rectangle(12,12,88,89);
			t.source = "common_json.shop_bj";
			t.width = 139;
			t.x = -2;
			t.y = -3.22;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 32.5;
			t.verticalCenter = 64;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 49;
			t.source = "common_json.group_time";
			t.width = 72;
			t.x = 8;
			t.y = 34;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 33;
			t.source = "common_json.diamond_png";
			t.width = 33;
			t.x = 22;
			t.y = 90;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 17;
			t.source = "common_json.zs_sale";
			t.width = 41;
			t.x = 75;
			t.y = 26;
			return t;
		};
		return ShopSkin$Skin40;
	})(eui.Skin);

	var ShopSkin$Skin41 = 	(function (_super) {
		__extends(ShopSkin$Skin41, _super);
		function ShopSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.buy_bj";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin41;
	})(eui.Skin);

	var ShopSkin$Skin42 = 	(function (_super) {
		__extends(ShopSkin$Skin42, _super);
		function ShopSkin$Skin42() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 126;
			this.width = 138;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.shop_bj")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 130;
			t.scale9Grid = new egret.Rectangle(12,12,88,89);
			t.source = "common_json.shop_bj";
			t.width = 139;
			t.x = -2;
			t.y = -3.22;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "common_json.diamond_png";
			t.x = 15;
			t.y = 20;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "common_json.shop_Num_120";
			t.x = 56;
			t.y = 41;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 20;
			t.horizontalCenter = 0;
			t.source = "common_json.zs_money_big5";
			t.width = 76;
			t.y = 95;
			return t;
		};
		return ShopSkin$Skin42;
	})(eui.Skin);

	var ShopSkin$Skin43 = 	(function (_super) {
		__extends(ShopSkin$Skin43, _super);
		function ShopSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.buy_bj";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin43;
	})(eui.Skin);

	function ShopSkin() {
		_super.call(this);
		this.skinParts = ["btn_back","Tool_title","Diamond_title","tool_list","btn_ToolBuy","total_money","flage_money","flage_gold","group_tool","btn_diamondBuy","diamond_money","diamond_list","group_diamond","group_box","sc_group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_back_i(),this.Tool_title_i(),this.Diamond_title_i(),this._Image2_i(),this._Image3_i(),this.sc_group_i()];
	}
	var _proto = ShopSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 710;
		t.source = "bg_frame_png";
		t.width = 541;
		t.x = 50;
		t.y = 192;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new game.ScaleButton();
		this.btn_back = t;
		t.height = 60;
		t.label = "";
		t.width = 60;
		t.x = 541;
		t.y = 238;
		t.skinName = ShopSkin$Skin39;
		return t;
	};
	_proto.Tool_title_i = function () {
		var t = new eui.Image();
		this.Tool_title = t;
		t.source = "common_json.prop_bj";
		t.visible = false;
		t.x = 239;
		t.y = 215;
		return t;
	};
	_proto.Diamond_title_i = function () {
		var t = new eui.Image();
		this.Diamond_title = t;
		t.source = "common_json.zs_bj";
		t.visible = false;
		t.x = 239;
		t.y = 215;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "common_json.total";
		t.visible = false;
		t.x = 360;
		t.y = 727.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.88;
		t.source = "common_json.diamond_png";
		t.visible = false;
		t.width = 37.36;
		t.x = 469;
		t.y = 723.06;
		return t;
	};
	_proto.sc_group_i = function () {
		var t = new eui.Scroller();
		this.sc_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 514;
		t.width = 511;
		t.x = 64;
		t.y = 364;
		t.viewport = this.group_box_i();
		return t;
	};
	_proto.group_box_i = function () {
		var t = new eui.Group();
		this.group_box = t;
		t.anchorOffsetX = 0;
		t.width = 513;
		t.elementsContent = [this.group_tool_i(),this.group_diamond_i()];
		return t;
	};
	_proto.group_tool_i = function () {
		var t = new eui.Group();
		this.group_tool = t;
		t.height = 514;
		t.width = 511;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Scroller1_i(),this._ScaleButton1_i(),this.btn_ToolBuy_i(),this.total_money_i(),this._Image4_i(),this.flage_money_i(),this.flage_gold_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i(),this._Image5_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 440;
		t.x = 36;
		t.y = 1.8799999999999955;
		t.viewport = this.tool_list_i();
		return t;
	};
	_proto.tool_list_i = function () {
		var t = new eui.List();
		this.tool_list = t;
		t.anchorOffsetY = 0;
		t.height = 135;
		t.itemRendererSkinName = gameSkin.ShopItemSkin;
		t.requireSelection = true;
		t.x = -50.58;
		t.y = 57.03;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalAlign = "center";
		t.horizontalGap = 20;
		t.orientation = "rows";
		t.rowAlign = "justifyUsingHeight";
		t.verticalAlign = "middle";
		t.verticalGap = 20;
		return t;
	};
	_proto._ScaleButton1_i = function () {
		var t = new game.ScaleButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.label = "";
		t.width = 135;
		t.x = 47;
		t.y = 345.22;
		t.skinName = ShopSkin$Skin40;
		return t;
	};
	_proto.btn_ToolBuy_i = function () {
		var t = new game.ScaleButton();
		this.btn_ToolBuy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.label = "";
		t.width = 208;
		t.x = 254;
		t.y = 408;
		t.skinName = ShopSkin$Skin41;
		return t;
	};
	_proto.total_money_i = function () {
		var t = new eui.BitmapLabel();
		this.total_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopBuyNum_fnt";
		t.height = 28;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 343;
		t.y = 361;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.source = "common_json.total";
		t.width = 69;
		t.x = 272;
		t.y = 357;
		return t;
	};
	_proto.flage_money_i = function () {
		var t = new eui.Image();
		this.flage_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.source = "common_json.diamond_png";
		t.visible = false;
		t.width = 31;
		t.x = 433;
		t.y = 361;
		return t;
	};
	_proto.flage_gold_i = function () {
		var t = new eui.Image();
		this.flage_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "common_json.golg_png";
		t.visible = false;
		t.width = 34;
		t.x = 430;
		t.y = 360;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopZsNum_fnt";
		t.height = 27;
		t.text = "10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 41;
		t.x = 123;
		t.y = 400;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 26;
		t.text = "8";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 49;
		t.x = 102.5;
		t.y = 439;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "common_json.first_buy_bj";
		t.width = 127;
		t.x = 51;
		t.y = 319;
		return t;
	};
	_proto.group_diamond_i = function () {
		var t = new eui.Group();
		this.group_diamond = t;
		t.height = 514;
		t.width = 513;
		t.x = 511;
		t.y = 0;
		t.elementsContent = [this._ScaleButton2_i(),this.btn_diamondBuy_i(),this.diamond_money_i(),this._Image6_i(),this._Scroller2_i()];
		return t;
	};
	_proto._ScaleButton2_i = function () {
		var t = new game.ScaleButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 135;
		t.x = 37;
		t.y = 345.22;
		t.skinName = ShopSkin$Skin42;
		return t;
	};
	_proto.btn_diamondBuy_i = function () {
		var t = new game.ScaleButton();
		this.btn_diamondBuy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 208;
		t.x = 254;
		t.y = 408;
		t.skinName = ShopSkin$Skin43;
		return t;
	};
	_proto.diamond_money_i = function () {
		var t = new eui.BitmapLabel();
		this.diamond_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopBuyNum_fnt";
		t.height = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 56;
		t.x = 343;
		t.y = 361;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.first_buy_bj";
		t.width = 127;
		t.x = 39;
		t.y = 319;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 440;
		t.y = 0;
		t.viewport = this.diamond_list_i();
		return t;
	};
	_proto.diamond_list_i = function () {
		var t = new eui.List();
		this.diamond_list = t;
		t.anchorOffsetY = 0;
		t.height = 135;
		t.itemRendererSkinName = gameSkin.DiamondItemSkin;
		t.requireSelection = true;
		t.x = -50.58;
		t.y = 57.03;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalAlign = "center";
		t.horizontalGap = 20;
		t.orientation = "rows";
		t.rowAlign = "justifyUsingHeight";
		t.verticalAlign = "middle";
		t.verticalGap = 20;
		return t;
	};
	return ShopSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/tool/ToolSkin.exml'] = window.gameSkin.ToolSkin = (function (_super) {
	__extends(ToolSkin, _super);
	var ToolSkin$Skin44 = 	(function (_super) {
		__extends(ToolSkin$Skin44, _super);
		function ToolSkin$Skin44() {
			_super.call(this);
			this.skinParts = [];
			
		}
		var _proto = ToolSkin$Skin44.prototype;

		return ToolSkin$Skin44;
	})(eui.Skin);

	var ToolSkin$Skin45 = 	(function (_super) {
		__extends(ToolSkin$Skin45, _super);
		function ToolSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_json.time_bg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToolSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_json.time_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "common_json.minus_time_png";
			t.x = 25;
			t.y = 37;
			return t;
		};
		return ToolSkin$Skin45;
	})(eui.Skin);

	function ToolSkin() {
		_super.call(this);
		this.skinParts = ["gamerHead_list","sc_tool","btn_tool","reduceTime_num","grp_tool"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grp_tool_i()];
	}
	var _proto = ToolSkin.prototype;

	_proto.grp_tool_i = function () {
		var t = new eui.Group();
		this.grp_tool = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 311;
		t.horizontalCenter = 218;
		t.verticalCenter = 410.5;
		t.width = 114;
		t.elementsContent = [this._Image1_i(),this.sc_tool_i(),this.btn_tool_i(),this.reduceTime_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 247.94;
		t.horizontalCenter = -2.5;
		t.rotation = 359.66;
		t.source = "common_json.set_bg";
		t.width = 79.04;
		t.y = 4.49;
		return t;
	};
	_proto.sc_tool_i = function () {
		var t = new eui.Scroller();
		this.sc_tool = t;
		t.height = 173;
		t.horizontalCenter = 0;
		t.width = 64;
		t.y = 26;
		t.skinName = ToolSkin$Skin44;
		t.viewport = this.gamerHead_list_i();
		return t;
	};
	_proto.gamerHead_list_i = function () {
		var t = new eui.List();
		this.gamerHead_list = t;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.itemRendererSkinName = gameSkin.GamerHeadSkin;
		t.x = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btn_tool_i = function () {
		var t = new game.ScaleButton();
		this.btn_tool = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 128;
		t.label = "";
		t.width = 112;
		t.x = 0.75;
		t.y = 182.22;
		t.skinName = ToolSkin$Skin45;
		return t;
	};
	_proto.reduceTime_num_i = function () {
		var t = new eui.BitmapLabel();
		this.reduceTime_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 28.33;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "12";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 55.67;
		t.x = 23;
		t.y = 276;
		return t;
	};
	return ToolSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/win/WinSkin.exml'] = window.gameSkin.WinSkin = (function (_super) {
	__extends(WinSkin, _super);
	var WinSkin$Skin46 = 	(function (_super) {
		__extends(WinSkin$Skin46, _super);
		function WinSkin$Skin46() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WinSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.Close";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		return WinSkin$Skin46;
	})(eui.Skin);

	var WinSkin$Skin47 = 	(function (_super) {
		__extends(WinSkin$Skin47, _super);
		function WinSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","common_json.btn_next")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WinSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 56;
			t.scaleX = 0.5;
			t.scaleY = 0.7;
			t.source = "common_json.btn_next";
			t.width = 62;
			t.x = 32;
			t.y = 24;
			return t;
		};
		return WinSkin$Skin47;
	})(eui.Skin);

	var WinSkin$Skin48 = 	(function (_super) {
		__extends(WinSkin$Skin48, _super);
		function WinSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","common_json.btn_again")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WinSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 64.29;
			t.scaleX = 0.7;
			t.scaleY = 0.7;
			t.source = "common_json.btn_again";
			t.width = 70;
			t.x = 20.5;
			t.y = 19.5;
			return t;
		};
		return WinSkin$Skin48;
	})(eui.Skin);

	var WinSkin$Skin49 = 	(function (_super) {
		__extends(WinSkin$Skin49, _super);
		function WinSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","common_json.btn_rank")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WinSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.button-bg";
			t.visible = true;
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 90;
			t.width = 86;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 41;
			t.source = "common_json.btn_rank";
			t.width = 47;
			t.x = 19.67;
			t.y = 21;
			return t;
		};
		return WinSkin$Skin49;
	})(eui.Skin);

	var WinSkin$Skin50 = 	(function (_super) {
		__extends(WinSkin$Skin50, _super);
		function WinSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["group"];
			
			this.elementsContent = [this._Image1_i(),this.group_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WinSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.key_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.group_i = function () {
			var t = new eui.Group();
			this.group = t;
			t.height = 95;
			t.width = 300;
			t.x = 0;
			t.y = 0;
			t.elementsContent = [this._Image2_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "common_json.lookad";
			t.x = 55;
			t.y = 22;
			return t;
		};
		return WinSkin$Skin50;
	})(eui.Skin);

	function WinSkin() {
		_super.call(this);
		this.skinParts = ["starThree","starTwo","starOne","comeOne","goOne","seeAd","btn_close","btn_next","btn_again","btn_rank","image","image0","image1","image2","btn_ad","image3","group"];
		
		this.height = 1136;
		this.width = 640;
		this.starThree_i();
		this.starTwo_i();
		this.starOne_i();
		this.comeOne_i();
		this.goOne_i();
		this.seeAd_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [246],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [211],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [123.5],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [442.06],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [257.5],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [211],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [11.75],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [263.22],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [394.13],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [257.5],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [211],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [24.5],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, [432.2],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [425.77],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [123.5],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [442.06],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [11.75],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [263.22],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [394.13],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [123.5],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [442.06],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [-640],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [640],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [180],[],this._Object13,"rotation");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [290],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [950],[],this._Object13,"y");
	}
	var _proto = WinSkin.prototype;

	_proto.starThree_i = function () {
		var t = new egret.tween.TweenGroup();
		this.starThree = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Wait1_i(),this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait2_i(),this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait3_i(),this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto.starTwo_i = function () {
		var t = new egret.tween.TweenGroup();
		this.starTwo = t;
		t.items = [this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait4_i(),this._Set4_i(),this._To4_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Wait5_i(),this._Set5_i(),this._To5_i()];
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto.starOne_i = function () {
		var t = new egret.tween.TweenGroup();
		this.starOne = t;
		t.items = [this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Wait6_i(),this._Set6_i(),this._To6_i()];
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto.comeOne_i = function () {
		var t = new egret.tween.TweenGroup();
		this.comeOne = t;
		t.items = [this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set7_i(),this._To7_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.goOne_i = function () {
		var t = new egret.tween.TweenGroup();
		this.goOne = t;
		t.items = [this._TweenItem8_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set8_i(),this._To8_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.seeAd_i = function () {
		var t = new egret.tween.TweenGroup();
		this.seeAd = t;
		t.items = [this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set9_i(),this._To9_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_i(),this.btn_next_i(),this.btn_again_i(),this.btn_rank_i(),this.image_i(),this._Image3_i(),this._Image4_i(),this.image0_i(),this.image1_i(),this.image2_i(),this.btn_ad_i(),this.image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21840;
		t.anchorOffsetY = 37354.66;
		t.height = 549.33;
		t.horizontalCenter = 0;
		t.source = "bg_frame_png";
		t.verticalCenter = 0;
		t.width = 520;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "common_json.wintext";
		t.y = 302;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new game.ScaleButton();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.6;
		t.label = "";
		t.width = 58.8;
		t.x = 528;
		t.y = 336;
		t.skinName = WinSkin$Skin46;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new game.ScaleButton();
		this.btn_next = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.label = "";
		t.width = 86;
		t.x = 119;
		t.y = 718;
		t.skinName = WinSkin$Skin47;
		return t;
	};
	_proto.btn_again_i = function () {
		var t = new game.ScaleButton();
		this.btn_again = t;
		t.height = 89;
		t.label = "";
		t.width = 86;
		t.x = 272;
		t.y = 719;
		t.skinName = WinSkin$Skin48;
		return t;
	};
	_proto.btn_rank_i = function () {
		var t = new game.ScaleButton();
		this.btn_rank = t;
		t.height = 89;
		t.label = "";
		t.width = 86;
		t.x = 427;
		t.y = 718;
		t.skinName = WinSkin$Skin49;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.height = 109;
		t.rotation = 336.68;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "common_json.star_bg";
		t.width = 114;
		t.x = 115.99;
		t.y = 464.66;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 115.59;
		t.rotation = 348.81;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "common_json.star_bg";
		t.width = 114;
		t.x = 245.12;
		t.y = 418.58;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 109;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "common_json.star_bg";
		t.width = 114;
		t.x = 415;
		t.y = 442.06;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "common_json.star";
		t.x = 246;
		t.y = 211;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "common_json.star";
		t.x = 246;
		t.y = 211;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.source = "common_json.star";
		t.x = 246;
		t.y = 211;
		return t;
	};
	_proto.btn_ad_i = function () {
		var t = new game.ScaleButton();
		this.btn_ad = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300;
		t.x = 165;
		t.y = 575;
		t.skinName = WinSkin$Skin50;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.height = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_json.key";
		t.verticalCenter = 0;
		t.width = 49;
		t.x = 200;
		return t;
	};
	return WinSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/port/item/PortBtnItemSkin.exml'] = window.gameSkin.PortBtnItemSkin = (function (_super) {
	__extends(PortBtnItemSkin, _super);
	function PortBtnItemSkin() {
		_super.call(this);
		this.skinParts = ["list_star","bml_num","btn_start","bml_num2"];
		
		this.height = 118;
		this.width = 104;
		this.elementsContent = [];
		this._Image1_i();
		
		this.list_star_i();
		
		this.bml_num_i();
		
		this.btn_start_i();
		
		this._Image2_i();
		
		this.bml_num2_i();
		
		this.states = [
			new eui.State ("lock",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("bml_num2","",1,"")
				])
			,
			new eui.State ("unlocked",
				[
					new eui.AddItems("_Image1","",1,""),
					new eui.AddItems("list_star","",1,""),
					new eui.AddItems("bml_num","",1,""),
					new eui.AddItems("btn_start","",1,"")
				])
		];
	}
	var _proto = PortBtnItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "common_json.por_num_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.list_star_i = function () {
		var t = new eui.List();
		this.list_star = t;
		t.height = 20;
		t.itemRenderer = game.StarsItem;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 26;
		t.y = 73;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.bml_num_i = function () {
		var t = new eui.BitmapLabel();
		this.bml_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "porNum_fnt";
		t.height = 52;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 57;
		t.x = 23;
		t.y = 21;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new game.ScaleButton();
		this.btn_start = t;
		t.height = 100;
		t.useImageSize = true;
		t.width = 90;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -2;
		t.source = "common_json.gray-btn";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto.bml_num2_i = function () {
		var t = new eui.BitmapLabel();
		this.bml_num2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "porNum_fnt";
		t.height = 52;
		t.horizontalCenter = -0.5;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 57;
		t.y = 20.5;
		return t;
	};
	return PortBtnItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/port/item/StarsItemSkin.exml'] = window.gameSkin.StarsItemSkin = (function (_super) {
	__extends(StarsItemSkin, _super);
	function StarsItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("owen",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.SetProperty("","width",20)
				])
			,
			new eui.State ("unowen",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = StarsItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "common_json.pornotstar";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "common_json.porstar";
		t.verticalCenter = 0;
		return t;
	};
	return StarsItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/pkwin/item/PKRankItemSkin.exml'] = window.gameSkin.PKRankItemSkin = (function (_super) {
	__extends(PKRankItemSkin, _super);
	function PKRankItemSkin() {
		_super.call(this);
		this.skinParts = ["gamerInfo","txt_nRank","txt_time","txt_gold","txt_nLevel"];
		
		this.height = 139;
		this.width = 400;
		this.elementsContent = [this.gamerInfo_i(),this.txt_nRank_i(),this.txt_time_i(),this.txt_gold_i(),this.txt_nLevel_i()];
	}
	var _proto = PKRankItemSkin.prototype;

	_proto.gamerInfo_i = function () {
		var t = new game.GamerInfo();
		this.gamerInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.skinName = "gameSkin.GamerInfo";
		t.width = 90;
		t.x = 3;
		t.y = 6;
		return t;
	};
	_proto.txt_nRank_i = function () {
		var t = new eui.Label();
		this.txt_nRank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf4af46;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 105;
		return t;
	};
	_proto.txt_time_i = function () {
		var t = new eui.Label();
		this.txt_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xefa24a;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 180;
		return t;
	};
	_proto.txt_gold_i = function () {
		var t = new eui.Label();
		this.txt_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xefa064;
		t.verticalCenter = 0;
		t.width = 73;
		t.x = 252;
		return t;
	};
	_proto.txt_nLevel_i = function () {
		var t = new eui.Label();
		this.txt_nLevel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xefa547;
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 326;
		return t;
	};
	return PKRankItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/test/item/TestItemSKin.exml'] = window.gameSkin.TestItemSKin = (function (_super) {
	__extends(TestItemSKin, _super);
	function TestItemSKin() {
		_super.call(this);
		this.skinParts = ["txt_name"];
		
		this.elementsContent = [this._Image1_i(),this.txt_name_i()];
	}
	var _proto = TestItemSKin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "common_json.element_bg _2";
		return t;
	};
	_proto.txt_name_i = function () {
		var t = new eui.Label();
		this.txt_name = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	return TestItemSKin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/shop/item/DiamondItemSkin.exml'] = window.gameSkin.DiamondItemSkin = (function (_super) {
	__extends(DiamondItemSkin, _super);
	function DiamondItemSkin() {
		_super.call(this);
		this.skinParts = ["item_num","item_money"];
		
		this.height = 113;
		this.width = 113;
		this.elementsContent = [this._Image1_i(),this.item_num_i(),this.item_money_i(),this._Image2_i()];
		this._Image3_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("item_num","width",39),
					new eui.SetProperty("item_num","height",34),
					new eui.SetProperty("item_num","y",10),
					new eui.SetProperty("item_num","x",10)
				])
			,
			new eui.State ("selected",
				[
					new eui.AddItems("_Image3","",1,""),
					new eui.AddItems("_Image4","",1,"")
				])
		];
	}
	var _proto = DiamondItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 113;
		t.source = "common_json.shop_bj";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item_num_i = function () {
		var t = new eui.BitmapLabel();
		this.item_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopZsNum_fnt";
		t.height = 29;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 62;
		t.y = 35;
		return t;
	};
	_proto.item_money_i = function () {
		var t = new eui.BitmapLabel();
		this.item_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopMoneyNum_fnt";
		t.height = 30;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 75;
		t.y = 79;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "common_json.diamond_png";
		t.width = 54;
		t.x = 10.5;
		t.y = 12;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 113;
		t.source = "common_json.checked_bj";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.height = 113;
		t.source = "common_json.checked";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DiamondItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/shop/item/ShopItemSkin.exml'] = window.gameSkin.ShopItemSkin = (function (_super) {
	__extends(ShopItemSkin, _super);
	function ShopItemSkin() {
		_super.call(this);
		this.skinParts = ["reduce_time","add_time","flage_money","flage_gold","item_num","item_money"];
		
		this.currentState = "normal";
		this.height = 113;
		this.width = 113;
		this.elementsContent = [this._Image1_i(),this.reduce_time_i(),this.add_time_i(),this.flage_money_i(),this.flage_gold_i(),this.item_num_i(),this.item_money_i()];
		this._Image2_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("selected",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("_Image3","",1,""),
					new eui.SetStateProperty(this, ["hostComponent.data.num"],[0],this.item_num,"text"),
					new eui.SetStateProperty(this, ["hostComponent.data.money"],[0],this.item_money,"text")
				])
			,
			new eui.State ("normal",
				[
				])
		];
	}
	var _proto = ShopItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 113;
		t.source = "common_json.shop_bj";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.reduce_time_i = function () {
		var t = new eui.Image();
		this.reduce_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "common_json.minus_time_png";
		t.visible = false;
		t.width = 42;
		t.x = 14;
		t.y = 24;
		return t;
	};
	_proto.add_time_i = function () {
		var t = new eui.Image();
		this.add_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "common_json.add_time_png";
		t.visible = false;
		t.width = 42;
		t.x = 14;
		t.y = 24;
		return t;
	};
	_proto.flage_money_i = function () {
		var t = new eui.Image();
		this.flage_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27;
		t.source = "common_json.diamond_png";
		t.visible = false;
		t.width = 31;
		t.x = 10;
		t.y = 81;
		return t;
	};
	_proto.flage_gold_i = function () {
		var t = new eui.Image();
		this.flage_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "common_json.golg_png";
		t.visible = false;
		t.width = 27;
		t.x = 11;
		t.y = 79;
		return t;
	};
	_proto.item_num_i = function () {
		var t = new eui.BitmapLabel();
		this.item_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shopZsNum_fnt";
		t.height = 29;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 62;
		t.y = 35;
		return t;
	};
	_proto.item_money_i = function () {
		var t = new eui.BitmapLabel();
		this.item_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "WaitNum_fnt";
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 65;
		t.x = 41;
		t.y = 80;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 113;
		t.source = "common_json.checked_bj";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 113;
		t.source = "common_json.checked";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ShopItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/modules/tool/item/GamerHeadSkin.exml'] = window.gameSkin.GamerHeadSkin = (function (_super) {
	__extends(GamerHeadSkin, _super);
	function GamerHeadSkin() {
		_super.call(this);
		this.skinParts = ["headImg_item0"];
		
		this.height = 56;
		this.width = 56;
		this.elementsContent = [this._Image1_i(),this.headImg_item0_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.sHeadImg"],[0],this.headImg_item0,"source");
	}
	var _proto = GamerHeadSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "common_json.headImg_bg_png";
		t.width = 56;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_item0_i = function () {
		var t = new eui.Image();
		this.headImg_item0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 50;
		t.x = 3;
		t.y = 3;
		return t;
	};
	return GamerHeadSkin;
})(eui.Skin);