$(document).ready(function(){
				
				$("#BtnShow").attr('disabled',true);
				
				$("#BtnHide").click(function(){
					if(confirm("Are you sure..??")){
						$("#MyDiv").hide(3000);
						$("#BtnToggle").text("Show");
						$("#BtnShow").attr('disabled',false);
						$("#BtnHide").attr('disabled',true);
					}
				});
				$("#BtnShow").click(function(){
					if(confirm("Are you sure..??")){
						$("#MyDiv").show(3000);
						$("#BtnToggle").text("Hide");
						$("#BtnShow").attr('disabled',true);
						$("#BtnHide").attr('disabled',false);
					}
				});
				$("#BtnToggle").click(function(){
					if(confirm("Are you sure..??")){
						$("#MyDiv").toggle(3000);
						if($("#BtnToggle").text()=="Hide")
						{
							$("#BtnToggle").text("Show");
							$("#BtnShow").attr('disabled',false);
							$("#BtnHide").attr('disabled',true);
						}
						else
						{
							$("#BtnToggle").text("Hide");
							$("#BtnShow").attr('disabled',true);
							$("#BtnHide").attr('disabled',false);
						}
					}
				});
				
				$("#BtnPlus").click(function(){
					
					var MyDivHeight= parseInt($("#MyDiv").css("height"));
					var MyDivWidth= parseInt($("#MyDiv").css("width"));
					
					if(MyDivHeight<500 && MyDivWidth<500)
					{
						MyDivHeight+=20;
						MyDivWidth+=20;
						$("#MyDiv").css("height",MyDivHeight);
						$("#MyDiv").css("width",MyDivWidth);
					}
					else
					{
						alert("More than 500px is not possible...!!");
					}
				});
				
				$("#BtnMinus").click(function(){
					var MyDivHeight= parseInt($("#MyDiv").css("height"));
					var MyDivWidth= parseInt($("#MyDiv").css("width"));
					
					if(MyDivHeight>40 && MyDivWidth>40)
					{
						MyDivHeight-=20;
						MyDivWidth-=20;
						$("#MyDiv").css("height",MyDivHeight);
						$("#MyDiv").css("width",MyDivWidth);
					}
					else
					{
						alert("Less than 40px is not possible...!!");
					}
				});
				
			});