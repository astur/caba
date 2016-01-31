function Caba(text, i){
    if(!(this instanceof Caba)) {return new Caba(text, i);}
    var _i = i || 0;
    var _text = text || '%s';
    var _visible = false;
    var _show = function(){
        process.stdout.write(_text.replace(/%s/, _i) + '\r');
        _visible = true;
    };
    var _hide = function(){
        process.stdout.write(Array(_text.replace(/%s/, _i).length + 1).join(' ') + '\r');
        _visible = false;
    };
    this.start = function(text, i){
        _text = text || _text;
        _i = i || _i;
        _show();
    };
    this.step = function(i){
        i = i || 1;
        _i = _i + i;
        _show();
    };
    this.log = function(){
        if (_visible) {
            _hide();
            console.log(Array.prototype.slice.call(arguments).join(' '));
            _show();
        } else {
            console.log(Array.prototype.slice.call(arguments).join(' '));
        }
    };
    this.stop = function(){
        _hide();
        _i = 0;
        _text = '%s';
    };
    this.finish = function(text, i){
        _hide();
        _text = text || _text;
        _i = i || _i;
        console.log(_text.replace(/%s/, _i));
        _i = 0;
        _text = '%s';
    };
};

module.exports = Caba; 