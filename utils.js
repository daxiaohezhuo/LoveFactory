/**
 * 工具函数
 */
var utils = (function(){
	function Tools(){}
	
	/** 判断是否存在目标class类 */
	Tools.prototype.hasClass = function(obj, desCls){
		var cls = desCls || '';
		
		if(cls.replace(/\s/g, '').length == 0){
			return false;
		}
		
		return new RegExp(' ' + desCls + ' ').test(' ' + obj.className + ' ');
	}
	
	/** 添加类名 */
	Tools.prototype.addClass = function(obj, desCls){
		if(!this.hasClass(obj, desCls)){
			obj.className = obj.className == '' ? desCls : ' ' + desCls;
		}
	}
	
	/** 删除类名 */
	Tools.prototype.removeClass = function(obj, desCls){
		var cls = '';
		var rep = ' ' + desCls;
		
		if(this.hasClass(obj, desCls)){
			cls = ' ' + obj.className.replace(/[\t\r\n]/g, '') + ' ';
			
			while(cls.indexOf(rep) >= 0){
				cls = cls.replace(rep, '');
			}
			
			obj.className = cls.replace(/^\s+|$\s+/g, '');
			
			return true;
		}
	}
	
	return {
		tools: new Tools()
	}
}());
