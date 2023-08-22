

var Fan = {
      color: 'red',
      cost:120,
      Amp: 1200,

        Showdetails:function()
        {
      // console.log(color+'  '+cost+ ''+Amp);
          console.log(this.color+ '  '+this.cost+'  '+ this.Amp);
        }
        

};
Fan.Showdetails();