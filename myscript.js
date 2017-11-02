window.onerror=function(msg,url,line)   //setting browser reaction after error occurs..
            {
            document.write('Message:'+msg);
            document.write('<br>URL:'+url);
            document.write('<br>Line:'+line);
            }
            function validate()
            {
             var n=document.getElementById('Name');    //retrieving values from textfields..
             var id=document.getElementById('Email');
             var z=document.getElementById('Zip');
             var coun=document.getElementById('Country');
             
            if(document.myForm.Name.value=='')
            {
                alert('please provide your name!!');
                document.myForm.Name.focus();
                return false;
            }
            else
            {
             var n=document.getElementById('Name').value;
                display_message.innerHTML=n;
                Name.disabled=true;
            }
            
             if(document.myForm.Email.value=='')
            {
                alert('please provide your Email!!');
                document.myForm.Email.focus();
                return false;
            }
            else
            {
             var id=document.getElementById('Email').value;
                display_email.innerHTML=id;
                Email.disabled=true;
            }
            
            if(document.myForm.Zip.value==''||isNaN(document.myForm.Zip.value)||document.myForm.Zip.value.length!=6)
            {
                alert('please provide your Zip Code!!');
                document.myForm.Zip.focus();
                return false;
            }
            else
            {
             var z=document.getElementById('Zip').value;
                display_zip.innerHTML=z;
                Zip.disabled=true;
            }
            
            if(document.myForm.Country.value=='0')
            {
                alert('please provide your country name!!');
                document.myForm.Country.focus();
                return false;
            }
            else
            {
             var coun=document.getElementById('Country').value;
                display_country.innerHTML=coun;
                Country.disabled=true;
            }
            }
            
            function Reset()
            {//enabling the disabled textField..
            Name.disabled=false;
            Email.disabled=false;
            Zip.disabled=false;
            Country.disabled=false;
            }