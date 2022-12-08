
function doSomething() {
    console.info("DOM carregado");
    var deleteBtn = document.getElementById('delete-btn');
    var searchBtn = document.getElementById('search-btn');
    var searchForm = document.getElementById('search-form');

    try {
        deleteBtn.addEventListener('click', function(e) {
           e.preventDefault();
           var delLink = this.getAttribute('href');
           var result = confirm('Quer realmente excluir esta tarefa?');
           if (result == true) {
            window.location.href = delLink;
           }
        });
    
        searchBtn.addEventListener('click', function() {
            searchForm.submit();
        })
        
    } catch (error) {
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var delLink = this.getAttribute('href');
            var result = confirm('Quer realmente excluir esta tarefa?');
            if (result == true) {
             window.location.href = delLink;
            }
         });
     
         searchBtn.addEventListener('click', function() {
             searchForm.submit();
         })
    }

    


  }
  
  if (document.readyState === "loading") {  // Ainda carregando
    document.addEventListener("DOMContentLoaded", doSomething);
  } else {  // `DOMContentLoaded` foi disparado
    doSomething();
  }