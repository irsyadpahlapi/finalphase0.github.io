function binnerdecimal(binner){
  var panjang = binner.toString()
  var nilai=0
  for(var i =panjang.length-1;i>=0;i--){
    nilai=nilai+Number(panjang[(panjang.length-1)-i]*Math.pow(2,i))
  }
  return nilai
}

function binnerhexadecimal(binner){
  var key = ['0','1']
  var convert = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  for(let p=0;p<binner.length;p++){
    if(key.includes(binner[p])===false){
      alert('nilai binner hanya 0 dan 1')
      return 0
    }
  }
  var panjang=binner.toString()
  var total=0,tampung='',arr=[]
  for(var i=panjang.length-1;i>=0;i--){
    tampung =tampung+panjang[i]
    total++
    if(total===4){
      arr.push(tampung)
      tampung=''
      total=0
    }
    else if(i===0){
      arr.push(tampung)
    }
  }
  var tampil=[]
  var simpan=''
  var decimal
  for(var j=arr.length-1;j>=0;j--){
    var kata=arr[j]
    for(var k=kata.length-1;k>=0;k--){
      simpan=simpan+kata[k]
    }
    tampil.push(convert[binnerdecimal(simpan)])
    simpan=''
  }
  var hasil=tampil.join().replace(/,/gi,'')
  var tampilid = document.getElementById('hasil');
  tampilid.innerHTML=hasil
  return tampil.join().replace(/,/gi,'')
}

// console.log(binnerhexadecimal(11101010))
