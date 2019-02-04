function loadView(data, tpln, divloadtpl, whitparse){
    getTemplate(tpln, data, function(output, err) {
    		$("#"+divloadtpl).html(output);
    });  
}


function appendView(data, tpln, divloadtpl, whitparse){
    getTemplate(tpln, data, function(output, err) {
        $("#"+divloadtpl).append(output);
    });  
}

function loadViewFree(data, tpln, divloadtpl, whitparse){
    getTemplateFree(tpln, data, function(output, err) {
        $("#"+divloadtpl).html(output);
    });  
}


function appendViewFree(data, tpln, divloadtpl, whitparse){
    getTemplateFree(tpln, data, function(output, err) {
        $("#"+divloadtpl).append(output);
    });  
}

function getTemplateFree(name, context, callback, whitparse) {
  $.ajax({
    url: 'pages/'+name+'.hbs',
    cache: true,
    success: function(data) {
       var result = $.parseJSON(context);
       var tpl = Handlebars.compile(data),
       output = tpl(result);
       callback(output, null);
    },
    error: function(err) {
      callback(null, err);
      alert(err);
    }
  });
}


function getTemplate(name, context, callback, whitparse) {
  $.ajax({
    url: 'pages/'+name+'.hbs',
    cache: true,
    success: function(data) {
       var result = context;
       var tpl = Handlebars.compile(data),
       output = tpl(result);
       callback(output, null);
    },
    error: function(err) {
      callback(null, err);
      alert(err);
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
    loadView(data, tpln, divloadtpl);
    },
    error: function(err) {
      alert(err);
    }
  });
  
}


function appendpage(tpln, divloadtpl, jsonroute) {
  $.ajax({
    url: jsonroute,
    cache: true,
    success: function(data) {
    appendView(data, tpln, divloadtpl);
    },
    error: function(err) {
       alert(err);
    }
  });
  
}

function loadpageFree(tpln, divloadtpl, jsonroute) {
  $.ajax({
    url: jsonroute,
    cache: true,
    success: function(data) {
    loadViewFree(data, tpln, divloadtpl);
    },
    error: function(err) {
      alert(err);
    }
  });
  
}


function appendpageFree(tpln, divloadtpl, jsonroute) {
  $.ajax({
    url: jsonroute,
    cache: true,
    success: function(data) {
    appendViewFree(data, tpln, divloadtpl);
    },
    error: function(err) {
       alert(err);
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
    data = JSON.parse(data.abogados);
    loadView({"data": data}, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}


function externalpageloadSimplifyToCitas(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    data = JSON.stringify(data);
    data = JSON.parse(data);
    citas = JSON.parse(data.citas)
    loadView({"data": citas}, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}

function externalpageloadAbogados(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    data = JSON.stringify(data);
    data = JSON.parse(data);
    owner = data.owner;
    data = JSON.parse(data.abogados);
    loadView({"data": data, "owner": owner}, tpln, divloadtpl);
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}

function externalpageloadAbogadosConEquipos(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    data = JSON.stringify(data);
    data = JSON.parse(data);
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
    var datax = JSON.parse(data.abogados);
    var tagsx = JSON.parse(data.tags);
    appendView({"data": datax}, tpln, divloadtpl);
    loadView({"data": tagsx}, 'tags', 'tagssearch');
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}


function loadaexternalpageloadsearch(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    var datax = JSON.parse(data.abogados);
    var tagsx = JSON.parse(data.tags);
    loadView({"data": datax}, tpln, divloadtpl);
    loadView({"data": tagsx}, 'tags', 'tagssearch');
    },
    error: function(err) {
    console.log(err);
    }
  });
  
}

function appenddexternalpageloadClientes(tpln, divloadtpl, url, paramsx, methodx) {
  $.ajax({
    url: url,
    cache: true,
    data: paramsx,
    method: methodx,
    success: function(data) {
    data = JSON.parse(data.clientes);
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

Handlebars.registerHelper("xif", function (expression, options) {
    return Handlebars.helpers["x"].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("sessionTrue", function (options) {
  var Xsessioning = window.sessionIN;
  Xsessioning = String(Xsessioning);
  if(Xsessioning == "true"){
   var result = options.fn(this);
  }else{
   var result = '';
  }
  return result;
});


Handlebars.registerHelper("sessionFalse", function (options) {
  var Xsessioning = window.sessionIN;
  Xsessioning = String(Xsessioning);
  if(Xsessioning != "true"){
    var result = options.fn(this);
  }else{
    var result = '';
  }
  return result;
});

Handlebars.registerHelper('ifCurrentUser', function(userID, options) {
  var v1 = String(userID);
  var userSession = window.localStorage.getItem("userSession");
  if(String(userSession) === 'null'){
    console.log('not currrent user '+v1);
    return options.inverse(this);
  }else{
  if(userSession != ''){
  userSession = JSON.parse(userSession);
  userSession = userSession.user.email;
  }else{
    userSession = false;
  }
  if(v1 === userSession){
    console.log('is current user');
    return options.fn(this);
  }else{
    console.log('not currrent user '+v1);
    return options.inverse(this);
  }
  }
});

Handlebars.registerHelper('notCurrentUser', function(userID, options) {
  var v1 = String(userID);
  var userSession = window.localStorage.getItem("userSession");
  if(String(userSession) === 'null'){
    console.log('not current user');
    return options.fn(this);
  }else{
  if(userSession != ''){
  userSession = JSON.parse(userSession);
  userSession = userSession.user.email;
  }else{
    userSession = false;
  }
  if(v1 != userSession){
    console.log('not current user');
    return options.fn(this);
  }else{
    console.log('is currrent user '+v1);
    return options.inverse(this);
  }
  }
});


Handlebars.registerHelper('ifnotOwner', function(userID, options) {
  var v1 = String(userID);
  var userSession = window.localStorage.getItem("userSession");
  if(String(userSession) === 'null'){
    console.log('not owner user '+v1);
    return options.fn(this);
  }else{
    if(userSession != ''){
    userSession = JSON.parse(userSession);
    userSession = userSession.user.email;
    }else{
      userSession = false
    }
    if(v1 === userSession){
      console.log('is  owner user');
      return options.inverse(this);
    }else{
      console.log('not owner user '+v1);
      return options.fn(this);
    }
  }
});

Handlebars.registerHelper('ifAbogado', function(options) {
  var userSession = window.localStorage.getItem("userSession");
  if(String(userSession) === 'null'){
    console.log('no es abogado');
    return options.inverse(this);
  }else{
    if(userSession != ''){
    userSession = JSON.parse(userSession);
    userSession = userSession.abogado;
    }else{
      userSession = false
    }
    if(userSession === false){
      console.log('no es abogado');
      return options.inverse(this);
    }else{
      console.log('es abogado');
      return options.fn(this);
    }
  }
});


Handlebars.registerHelper('ifCliente', function(options) {
  var userSession = window.localStorage.getItem("userSession");
  if(String(userSession) === 'null'){
    console.log('no es abogado');
    return options.fn(this);
  }else{
    if(userSession != ''){
    userSession = JSON.parse(userSession);
    userSession = userSession.abogado;
    }else{
      userSession = false
    }
    if(userSession === false){
      console.log('no es abogado');
      return options.fn(this);
      
    }else{
      console.log('es abogado');
      return options.inverse(this);
    }
  }
});

Handlebars.registerHelper('eachWhitJSONparse', function(context, options) {
  var context = JSON.parse(context)
  var ret = "";

  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
});



Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  v1 = String(v1);
  v2 = String(v2);
  if(v1 == v2) {
    console.log('equal');
    return options.fn(this);
  }else{
    console.log('not equal '+v1 +' '+ v2 );
    return options.inverse(this);
  }
  
});


Handlebars.registerHelper('trimString', function(passedString) {
    var theString = passedString.substring(0,250);
    return new Handlebars.SafeString(theString);
});

Handlebars.registerHelper('oneLineString', function(passedString) {
    var theString = passedString.replace(/\n/g, "");
    return new Handlebars.SafeString(theString);
});


Handlebars.registerHelper('productionServer', function() {
    var theString = "https://access-point-law-connect.herokuapp.com";
    return new Handlebars.SafeString(theString);
});
  
Handlebars.registerHelper('developmentServer', function() {
    var theString = "http://192.168.1.71:3000";
    return new Handlebars.SafeString(theString);
});