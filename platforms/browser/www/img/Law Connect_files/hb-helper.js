function loadView(data, tpln, divloadtpl){
    getTemplate(tpln, data, function(output, err) {
    	setTimeout(function(){
    		$("#"+divloadtpl).html(output);
    	}, 100);
    });  
}


function appendView(data, tpln, divloadtpl){
    getTemplate(tpln, data, function(output, err) {
      setTimeout(function(){
        $("#"+divloadtpl).append(output);
      }, 100);
    });  
}

function getTemplate(name, context, callback) {
  $.ajax({
    url: 'pages/'+name+'.hbs',
    cache: true,
    success: function(data) {
      var tpl = Handlebars.compile(data),
      output = tpl(context);
      callback(output, null);
    },
    error: function(err) {
      callback(null, err);
    }
  });
}

function loadPartial(data, partial,divloadtpl){
  getPartial(partial, data, function(output, err) {
    $('#'+divloadtpl).addClass('animated fadeOut');
    setTimeout(function(){
      $("#"+divloadtpl).html(output);
      $('#'+divloadtpl).addClass('animated slideInDown');
    }, 2);
  }); 
}

function getPartial(name, context, callback){
  $.ajax({
    url: 'pages/'+name+'.hbs',
    cache: true,
    success: function(data) {
      var tpl = Handlebars.compile(data),
      output = tpl(context);
      console.log(tpl);
      callback(output, null);
    },
    error: function(err) {
      callback(null, err);
    }
  });
}

function loadpage(tpln, divloadtpl, jsonroute) {
  $.ajax({
    url: jsonroute,
    cache: true,
    success: function(data) {
    console.log('Respuesta satisfactoria');
    loadView(data, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}


function appendpage(tpln, divloadtpl, jsonroute) {
  $.ajax({
    url: jsonroute,
    cache: true,
    success: function(data) {
    console.log('Respuesta satisfactoria');
    appendView(data, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}

function externalpageload(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    console.log(data.notice);
    data = JSON.parse(data.abogados);
    console.log(data);
    loadView({"data": data}, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}

function appenddexternalpageload(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    console.log(data.notice);
    data = JSON.parse(data.abogados);
    console.log(data);
    appendView({"data": data}, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}

Handlebars.registerHelper("foreach",function(arr,options) {
    if(options.inverse && !arr.length)
        return options.inverse(this);

    return arr.map(function(item,index) {
        item.$index = index;
        item.$first = index === 0;
        item.$last  = index === arr.length-1;
        return options.fn(item);
    }).join('');
});



Handlebars.registerHelper('favoriteButton', function(producto_id) {
    

});


Handlebars.registerHelper('equalx', function(val,val2,validate,context) {
    if(val == val2){
      validate = true;
    }else{
      validate = false;
    }

    if(validate) {
      return context;
    }else{
      return '';
    }
});


Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});



Handlebars.registerHelper('renderStaticPartial', function(context) {
    return JSON.stringify(context);
});


Handlebars.registerHelper('host', function(url) {
    var host = "https://www.urgarden.com.mx"+ url;
    return host;
});



Handlebars.registerHelper('session_token', function(url) {
    var session_token = window.localStorage.getItem("session_token"); 

    return session_token;
});


Handlebars.registerHelper('link', function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="' + url + '">' + text + '</a>';

  return new Handlebars.SafeString(result);
});


Handlebars.registerHelper('reverse', function (arr) {
    arr.reverse();
});

  