module.exports = function (text, i){
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


/*

- создать счётчик (текст, начальное значение) // var caba = require('caba')();   // var caba = require('caba')('%s tasks done.', 0);
- начать (текст, начальное значение)          // caba.start();                   // caba.start('%s tasks done.', 0);
- инкрементировать (величина)                 // caba.step();                    // caba.step(5);
- пропустить вывод в консоль                  // caba.log('TEST');               // caba.log(a, b, c, d);
- удалить счётчик                             // caba.stop();
- завершить счётчик                           // caba.finish();                  // caba.finish('Well done %s tasks!', 100);

*/