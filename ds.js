var str="aaaaa"
var str1="aaaaa"
var x = str.length;
var count=0;
for(var i=0;i<str.length;i++)
{
    var count=0;
  for(j=0;j<str1.length;j++)
  {
      if(str[i]==str1[j])
      {
          count++;
      }
  }
  if(count==1)
  {
      console.log(i);
      break;
  }
  else if((count==0) || (count>1))
  {
      console.log("-1")
  }

}
  