window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        inici: {
            url: '/inici',
            template: 'views/inici.html',
            controller: 'inici'
        },
        Dilluns: {
            url: '/Dilluns',
            template: 'views/Dilluns.html',
            controller: 'Dilluns'
        },
        Dimarts: {
            url: '/Dimarts',
            template: 'views/Dimarts.html',
            controller: 'Dimarts'
        },
       Dimecres: {
            url: '/Dimecres',
            template: 'views/Dimecres.html',
            controller: 'Dimecres'
        },
        Dijous: {
            url: '/Dijous',
            template: 'views/Dijous.html',
            controller: 'Dijous'
        },
        Divendres: {
            url: '/Divendres',
            template: 'views/Divendres.html',
            controller: 'Divendres'
        },
        Tornada: {
            url: '/Tornada',
            template: 'views/Tornada.html',
            controller: 'Tornada'
        }
        Mapes: {
            url: '/Mapes',
            template: 'views/Mapes.html',
            controller: 'Mapes'
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        Menu: {
            url: '/Menu',
            template: 'views/Menu.html',
            controller: 'Menu'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('inici');
 
}, false);
