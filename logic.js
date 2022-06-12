let nishantbirthday = document.getElementById('nishantbirthday').style.display = "none"
// let page1 = document.getElementById('page1').style.display = "none";
let page2 = document.getElementById('page2').style.display = "none";
let page3 = document.getElementById('page3').style.display = "none";
let page4 = document.getElementById('page4').style.display = "none";
let page5 = document.getElementById('page5').style.display = "none";
let page6 = document.getElementById('page6').style.display = "none";
let page7 = document.getElementById('page7').style.display = "none";
let page8 = document.getElementById('page8').style.display = "none";
let audioElementdiv = document.getElementById('audiodiv').style.display = "none";
let audioElement = document.getElementById('audio');

let homebtn = document.getElementById('homebtn').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "block";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
    document.getElementById('page5').style.display = "none";
    document.getElementById('page6').style.display = "none";
    document.getElementById('page7').style.display = "none";
    document.getElementById('page8').style.display = "none";
    document.getElementById('audiodiv').style.display = "none";
    document.getElementById('nishantbirthday').style.display = "none";
    audioElement.pause()
})

let nishant = document.getElementById('nishant').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block"; 
    document.getElementById('namevalid').style.display = "none";
    document.getElementById('nameinvalid').style.display = "none" 
    document.getElementById('passwordvalid').style.display = "none";
    document.getElementById('passwordinvalid').style.display = "none" 
    let nameverify  = false;
    let passwordverify  = false;

    let name = document.getElementById('name');
    name.addEventListener('blur',()=>{
        let regex= /^nishant rathod$/i
        let str = name.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('namevalid').style.display = "block";
            document.getElementById('nameinvalid').style.display = "none"
            nameverify  = true;  
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('namevalid').style.display = "none";
            document.getElementById('nameinvalid').style.display = "block"
            nameverify  = false;      
        }  
    })

    let password = document.getElementById('password')
    password.addEventListener('blur',()=>{
        let regex= /^nishant123$/i
        let str = password.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('passwordvalid').style.display = "block";
            document.getElementById('passwordinvalid').style.display = "none"
            passwordverify  = true;   
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('passwordvalid').style.display = "none";
            document.getElementById('passwordinvalid').style.display = "block"
            passwordverify  = false;    
        } 
    })

    let submitbtn = document.getElementById('submitbtn')
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let waite = ` <h4 class="text-black font-bold">Please waite a moment......</h4>`;
        document.getElementById('pleasewaite').innerHTML = waite 
        setTimeout(() => { 
            if(passwordverify&&nameverify ==true){
                document.getElementById('nishantbirthday').style.display = "block";
                document.getElementById('page2').style.display = "none";
                audioElement.play()
                
            }
            else{
                let html = `<h4 class="text-red-500">Something went wrong please check it out name and password again...!</h4>`
                document.getElementById('pleasewaite').innerHTML = html;
                
            }
        }, 3000);
        let nishantbirthdaybtn = document.getElementById('nishantbirthdaybtn');
        nishantbirthdaybtn.addEventListener('click',()=>{
            document.getElementById('nishantbirthday').style.display = "none";
            document.getElementById('page3').style.display = "block";
            audioElement.pause()
        })
        let finalpaper = document.getElementById('finalpaper');
        finalpaper.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page4').style.display = "block";
            let goback = document.getElementById('goback')
            goback.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page4').style.display = "none";
                
            })
        }) 
        let marksheet = document.getElementById('marksheet');
        marksheet.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page5').style.display = "block";
            let goback5 = document.getElementById('goback5')
            goback5.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page5').style.display = "none";
                
            })
        }) 
        let pizza = document.getElementById('pizza');
        pizza.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page6').style.display = "block";
            let goback6 = document.getElementById('goback6')
            goback6.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page6').style.display = "none";
                
            
            })
        }) 

        let sister = document.getElementById('sister');
        sister.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page7').style.display = "block";
             let goback7 = document.getElementById('goback7');
             goback7.addEventListener('click',()=>{
                 document.getElementById('page7').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })

        let recording = document.getElementById('recording');
        recording.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page8').style.display = "block";
             let goback8 = document.getElementById('goback8');
             goback8.addEventListener('click',()=>{
                 document.getElementById('page8').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })
         
         
    }) 
})

let pavan = document.getElementById('pavan').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block"; 
    document.getElementById('namevalid').style.display = "none";
    document.getElementById('nameinvalid').style.display = "none" 
    document.getElementById('passwordvalid').style.display = "none";
    document.getElementById('passwordinvalid').style.display = "none" 
    let nameverify  = false;
    let passwordverify  = false;

    let name = document.getElementById('name');
    name.addEventListener('blur',()=>{
        let regex= /^pavan bandiwar$/i
        let str = name.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('namevalid').style.display = "block";
            document.getElementById('nameinvalid').style.display = "none"
            nameverify  = true;  
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('namevalid').style.display = "none";
            document.getElementById('nameinvalid').style.display = "block"
            nameverify  = false;      
        }  
    })

    let password = document.getElementById('password')
    password.addEventListener('blur',()=>{
        let regex= /^pavan1392t$/i
        let str = password.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('passwordvalid').style.display = "block";
            document.getElementById('passwordinvalid').style.display = "none"
            passwordverify  = true;   
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('passwordvalid').style.display = "none";
            document.getElementById('passwordinvalid').style.display = "block"
            passwordverify  = false;    
        } 
    })

    let submitbtn = document.getElementById('submitbtn')
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let waite = ` <h4 class="text-black font-bold">Please waite a moment......</h4>`;
        document.getElementById('pleasewaite').innerHTML = waite 
        setTimeout(() => { 
            if(passwordverify&&nameverify ==true){
                document.getElementById('page2').style.display = "none";
                document.getElementById('page3').style.display = "block";
                
            }
            else{
                let html = `<h4 class="text-red-500">Something went wrong please check it out name and password again...!</h4>`
                document.getElementById('pleasewaite').innerHTML = html;
                
            }
        }, 3000);
        let finalpaper = document.getElementById('finalpaper');
        finalpaper.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page4').style.display = "block";
            let goback = document.getElementById('goback')
            goback.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page4').style.display = "none";
                
            })
        }) 
        let marksheet = document.getElementById('marksheet');
        marksheet.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page5').style.display = "block";
            let goback5 = document.getElementById('goback5')
            goback5.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page5').style.display = "none";
                
            })
        }) 
        let pizza = document.getElementById('pizza');
        pizza.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page6').style.display = "block";
            let goback6 = document.getElementById('goback6')
            goback6.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page6').style.display = "none";
                
            
            })
        }) 

        let sister = document.getElementById('sister');
        sister.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page7').style.display = "block";
             let goback7 = document.getElementById('goback7');
             goback7.addEventListener('click',()=>{
                 document.getElementById('page7').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })

        let recording = document.getElementById('recording');
        recording.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page8').style.display = "block";
             let goback8 = document.getElementById('goback8');
             goback8.addEventListener('click',()=>{
                 document.getElementById('page8').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })
         
         
    }) 
})

let nayan = document.getElementById('nayan').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block"; 
    document.getElementById('namevalid').style.display = "none";
    document.getElementById('nameinvalid').style.display = "none" 
    document.getElementById('passwordvalid').style.display = "none";
    document.getElementById('passwordinvalid').style.display = "none" 
    let nameverify  = false;
    let passwordverify  = false;

    let name = document.getElementById('name');
    name.addEventListener('blur',()=>{
        let regex= /^nayan ghagi$/i
        let str = name.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('namevalid').style.display = "block";
            document.getElementById('nameinvalid').style.display = "none"
            nameverify  = true;  
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('namevalid').style.display = "none";
            document.getElementById('nameinvalid').style.display = "block"
            nameverify  = false;      
        }  
    })

    let password = document.getElementById('password')
    password.addEventListener('blur',()=>{
        let regex= /^nayanghagi321$/i
        let str = password.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('passwordvalid').style.display = "block";
            document.getElementById('passwordinvalid').style.display = "none"
            passwordverify  = true;   
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('passwordvalid').style.display = "none";
            document.getElementById('passwordinvalid').style.display = "block"
            passwordverify  = false;    
        } 
    })

    let submitbtn = document.getElementById('submitbtn')
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let waite = ` <h4 class="text-black font-bold">Please waite a moment......</h4>`;
        document.getElementById('pleasewaite').innerHTML = waite 
        setTimeout(() => { 
            if(passwordverify&&nameverify ==true){
                document.getElementById('page2').style.display = "none";
                document.getElementById('page3').style.display = "block";
                
            }
            else{
                let html = `<h4 class="text-red-500">Something went wrong please check it out name and password again...!</h4>`
                document.getElementById('pleasewaite').innerHTML = html;
                
            }
        }, 3000);
        let finalpaper = document.getElementById('finalpaper');
        finalpaper.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page4').style.display = "block";
            let goback = document.getElementById('goback')
            goback.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page4').style.display = "none";
                
            })
        }) 
        let marksheet = document.getElementById('marksheet');
        marksheet.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page5').style.display = "block";
            let goback5 = document.getElementById('goback5')
            goback5.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page5').style.display = "none";
                
            })
        }) 
        let pizza = document.getElementById('pizza');
        pizza.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page6').style.display = "block";
            let goback6 = document.getElementById('goback6')
            goback6.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page6').style.display = "none";
                
            
            })
        }) 

        let sister = document.getElementById('sister');
        sister.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page7').style.display = "block";
             let goback7 = document.getElementById('goback7');
             goback7.addEventListener('click',()=>{
                 document.getElementById('page7').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })

        let recording = document.getElementById('recording');
        recording.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page8').style.display = "block";
             let goback8 = document.getElementById('goback8');
             goback8.addEventListener('click',()=>{
                 document.getElementById('page8').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })
         
         
    }) 
})

let amit = document.getElementById('amit').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block"; 
    document.getElementById('namevalid').style.display = "none";
    document.getElementById('nameinvalid').style.display = "none" 
    document.getElementById('passwordvalid').style.display = "none";
    document.getElementById('passwordinvalid').style.display = "none" 
    let nameverify  = false;
    let passwordverify  = false;

    let name = document.getElementById('name');
    name.addEventListener('blur',()=>{
        let regex= /^amit pazare$/i
        let str = name.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('namevalid').style.display = "block";
            document.getElementById('nameinvalid').style.display = "none"
            nameverify  = true;  
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('namevalid').style.display = "none";
            document.getElementById('nameinvalid').style.display = "block"
            nameverify  = false;      
        }  
    })

    let password = document.getElementById('password')
    password.addEventListener('blur',()=>{
        let regex= /^amitsuhanilover$/i
        let str = password.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('passwordvalid').style.display = "block";
            document.getElementById('passwordinvalid').style.display = "none"
            passwordverify  = true;   
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('passwordvalid').style.display = "none";
            document.getElementById('passwordinvalid').style.display = "block"
            passwordverify  = false;    
        } 
    })

    let submitbtn = document.getElementById('submitbtn')
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let waite = ` <h4 class="text-black font-bold">Please waite a moment......</h4>`;
        document.getElementById('pleasewaite').innerHTML = waite 
        setTimeout(() => { 
            if(passwordverify&&nameverify ==true){
                document.getElementById('page2').style.display = "none";
                document.getElementById('page3').style.display = "block";
                
            }
            else{
                let html = `<h4 class="text-red-500">Something went wrong please check it out name and password again...!</h4>`
                document.getElementById('pleasewaite').innerHTML = html;
                
            }
        }, 3000);
        let finalpaper = document.getElementById('finalpaper');
        finalpaper.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page4').style.display = "block";
            let goback = document.getElementById('goback')
            goback.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page4').style.display = "none";
                
            })
        }) 
        let marksheet = document.getElementById('marksheet');
        marksheet.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page5').style.display = "block";
            let goback5 = document.getElementById('goback5')
            goback5.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page5').style.display = "none";
                
            })
        }) 
        let pizza = document.getElementById('pizza');
        pizza.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page6').style.display = "block";
            let goback6 = document.getElementById('goback6')
            goback6.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page6').style.display = "none";
                
            
            })
        }) 

        let sister = document.getElementById('sister');
        sister.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page7').style.display = "block";
             let goback7 = document.getElementById('goback7');
             goback7.addEventListener('click',()=>{
                 document.getElementById('page7').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })

        let recording = document.getElementById('recording');
        recording.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page8').style.display = "block";
             let goback8 = document.getElementById('goback8');
             goback8.addEventListener('click',()=>{
                 document.getElementById('page8').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })
         
         
    }) 
})
 
let aman = document.getElementById('aman').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block"; 
    document.getElementById('namevalid').style.display = "none";
    document.getElementById('nameinvalid').style.display = "none" 
    document.getElementById('passwordvalid').style.display = "none";
    document.getElementById('passwordinvalid').style.display = "none" 
    let nameverify  = false;
    let passwordverify  = false;

    let name = document.getElementById('name');
    name.addEventListener('blur',()=>{
        let regex= /^aman rajurakar$/i
        let str = name.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('namevalid').style.display = "block";
            document.getElementById('nameinvalid').style.display = "none"
            nameverify  = true;  
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('namevalid').style.display = "none";
            document.getElementById('nameinvalid').style.display = "block"
            nameverify  = false;      
        }  
    })

    let password = document.getElementById('password')
    password.addEventListener('blur',()=>{
        let regex= /^aman143$/i
        let str = password.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('passwordvalid').style.display = "block";
            document.getElementById('passwordinvalid').style.display = "none"
            passwordverify  = true;   
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('passwordvalid').style.display = "none";
            document.getElementById('passwordinvalid').style.display = "block"
            passwordverify  = false;    
        } 
    })

    let submitbtn = document.getElementById('submitbtn')
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let waite = ` <h4 class="text-black font-bold">Please waite a moment......</h4>`;
        document.getElementById('pleasewaite').innerHTML = waite 
        setTimeout(() => { 
            if(passwordverify&&nameverify ==true){
                document.getElementById('page2').style.display = "none";
                document.getElementById('page3').style.display = "block";
                
            }
            else{
                let html = `<h4 class="text-red-500">Something went wrong please check it out name and password again...!</h4>`
                document.getElementById('pleasewaite').innerHTML = html;
                
            }
        }, 3000);
        let finalpaper = document.getElementById('finalpaper');
        finalpaper.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page4').style.display = "block";
            let goback = document.getElementById('goback')
            goback.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page4').style.display = "none";
                
            })
        }) 
        let marksheet = document.getElementById('marksheet');
        marksheet.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page5').style.display = "block";
            let goback5 = document.getElementById('goback5')
            goback5.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page5').style.display = "none";
                
            })
        }) 
        let pizza = document.getElementById('pizza');
        pizza.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page6').style.display = "block";
            let goback6 = document.getElementById('goback6')
            goback6.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page6').style.display = "none";
                
            
            })
        }) 

        let sister = document.getElementById('sister');
        sister.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page7').style.display = "block";
             let goback7 = document.getElementById('goback7');
             goback7.addEventListener('click',()=>{
                 document.getElementById('page7').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })

        let recording = document.getElementById('recording');
        recording.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page8').style.display = "block";
             let goback8 = document.getElementById('goback8');
             goback8.addEventListener('click',()=>{
                 document.getElementById('page8').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })
         
         
    }) 
})

let neha = document.getElementById('neha').addEventListener('click',()=>{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block"; 
    document.getElementById('namevalid').style.display = "none";
    document.getElementById('nameinvalid').style.display = "none" 
    document.getElementById('passwordvalid').style.display = "none";
    document.getElementById('passwordinvalid').style.display = "none" 
    let nameverify  = false;
    let passwordverify  = false;

    let name = document.getElementById('name');
    name.addEventListener('blur',()=>{
        let regex= /^neha marape$/i
        let str = name.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('namevalid').style.display = "block";
            document.getElementById('nameinvalid').style.display = "none"
            nameverify  = true;  
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('namevalid').style.display = "none";
            document.getElementById('nameinvalid').style.display = "block"
            nameverify  = false;      
        }  
    })

    let password = document.getElementById('password')
    password.addEventListener('blur',()=>{
        let regex= /^nehamarape456$/i
        let str = password.value;
        console.log(regex,str)
        if (regex.test(str)){
            console.log("your name vailed")
            document.getElementById('passwordvalid').style.display = "block";
            document.getElementById('passwordinvalid').style.display = "none"
            passwordverify  = true;   
        }
        else{
            console.log("your name is notvailed")
            document.getElementById('passwordvalid').style.display = "none";
            document.getElementById('passwordinvalid').style.display = "block"
            passwordverify  = false;    
        } 
    })

    let submitbtn = document.getElementById('submitbtn')
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let waite = ` <h4 class="text-black font-bold">Please waite a moment......</h4>`;
        document.getElementById('pleasewaite').innerHTML = waite 
        setTimeout(() => { 
            if(passwordverify&&nameverify ==true){
                document.getElementById('page2').style.display = "none";
                document.getElementById('page3').style.display = "block";
                
            }
            else{
                let html = `<h4 class="text-red-500">Something went wrong please check it out name and password again...!</h4>`
                document.getElementById('pleasewaite').innerHTML = html;
                
            }
        }, 3000);
        let finalpaper = document.getElementById('finalpaper');
        finalpaper.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page4').style.display = "block";
            let goback = document.getElementById('goback')
            goback.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page4').style.display = "none";
                
            })
        }) 
        let marksheet = document.getElementById('marksheet');
        marksheet.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page5').style.display = "block";
            let goback5 = document.getElementById('goback5')
            goback5.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page5').style.display = "none";
                
            })
        }) 
        let pizza = document.getElementById('pizza');
        pizza.addEventListener('click',()=>{
            document.getElementById('page3').style.display = "none";
            document.getElementById('page6').style.display = "block";
            let goback6 = document.getElementById('goback6')
            goback6.addEventListener('click',()=>{
                document.getElementById('page3').style.display = "block";
                document.getElementById('page6').style.display = "none";
                
            
            })
        }) 

        let sister = document.getElementById('sister');
        sister.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page7').style.display = "block";
             let goback7 = document.getElementById('goback7');
             goback7.addEventListener('click',()=>{
                 document.getElementById('page7').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })

        let recording = document.getElementById('recording');
        recording.addEventListener('click',()=>{
             document.getElementById('page3').style.display = "none";
             document.getElementById('page8').style.display = "block";
             let goback8 = document.getElementById('goback8');
             goback8.addEventListener('click',()=>{
                 document.getElementById('page8').style.display = "none";
                 document.getElementById('page3').style.display = "block";
             })
        })
         
         
    }) 
})


 
