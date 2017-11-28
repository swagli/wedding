
$.ajax({
    type: "GET",
    url: "data/product.php",
    success:function(data){
        var html="";
        for(var obj of data){
            html+=(
                `
                <div class="col-md-6 rt">
                    <div calss="row ">
                        <div class="col-md-6 col-xs-3">
                           <a href="${obj.href}">
                              <img class="img-responsive" src="${obj.pic}" alt=""/>
                           </a>
                        </div>
                        <div class="col-md-6 col-xs-3">
                            <h3><em>${obj.title}</em><span>本季热推</span></h3>
                            <h4>
                                <span class="newPrice">¥${obj.newPrice}</span>
                                <span class="oldPrice">¥${obj.oldPrice}</span>
                            </h4>
                            <h5>
                                <dl>
                                    <dd>摄影:<span>${obj.title2}</span></dd>
                                    <dd>造型:<span>5套</span></dd>
                                    <dd>精修:<span>50套</span></dd>
                                </dl>
                            </h5>
                        </div>
                 </div>
            </div>				
        `);
           $('#product').html(html);
        }
    },
    error:function(){
        alert("网络故障，请检查！")
    }
});

