document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
//        alert("On Device ready");
    var permissions = cordova.plugins.permissions;
//    alert("On permission");
    permissions.hasPermission(permissions.ACCESS_COARSE_LOCATION, function( status ){
  if ( status.hasPermission ) {
//    alert("Yes :D ");
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
  else {
//    alert("No :( ");
    permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION, permGranted, onError);
  }
});
    }


function onSuccess(position) {
var element = document.getElementById('geolocation');
element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
'Longitude: ' + position.coords.longitude + '<br />' +
'<hr />' + element.innerHTML;
}
function onError(error) {
//alert('code: ' + error.code + 'n' +
//'message: ' + error.message + 'n');
}
function permGranted(status){
if( !status.hasPermission ) error();
else navigator.geolocation.getCurrentPosition(onSuccess, onError);
}