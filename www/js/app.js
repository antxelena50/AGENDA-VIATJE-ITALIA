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
        });
     
    /*Declare modal*/
$JSView.declareModal({
        modal_info_aeroport: {
            url: '/modal_info_aeroport',
            template: 'views/modal_info_aeroport.html',
            controller: 'modal_info_aeroport'
        },
        modal_info_coliseo: {
            url: '/modal_info_coliseo',
            template: 'views/modal_info_coliseo.html',
            controller: 'modal_info_coliseo'
        },
        modal_info_narvona: {
            url: '/modal_info_narvona',
            template: 'views/modal_info_narvona.html',
            controller: 'modal_info_narvona'
        },
        modal_info_sanpietro: {
            url: '/modal_info_sanpietro',
            template: 'views/modal_info_sanpietro.html',
            controller: 'modal_info_sanpietro'
        }
    });
    /*Asign view start*/
    $JSView
        .initView('inici');
 
}, false);
