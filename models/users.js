module.exports = {
  get: function (id) {
    const users = {
      1: {
        name: "Test User",
        email: "test@user.com"
      }
    }
    
    //console.log(users[0]);
    if( id in users ){
      console.log('jest jest')
      return users[id];
    }else{
      return null;
    }
    
  }
};
