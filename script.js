// Initialiser la carte
var map = L.map('map').setView([45.9368, 6.1322], 18);

L.tileLayer('http://89.168.57.91:8080/LyceeLachenal/{z}/{x}/{y}.png', {
    minZoom: 17,
    maxZoom: 22,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);


// Définir les données GeoJSON pour chaque étage
var geojsonDataEtage1 = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "salle": "13" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132443855592967, 45.936792791783532 ], [ 6.132451800410498, 45.936862076107261 ], [ 6.132332645198166, 45.936867696926917 ], [ 6.132323764318674, 45.936798784599809 ], [ 6.132443855592967, 45.936792791783532 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "14" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132323764318674, 45.93679878003244 ], [ 6.132332645193752, 45.936867696937178 ], [ 6.132169440848435, 45.936875476859768 ], [ 6.132160492656691, 45.936806544549889 ], [ 6.132323764318674, 45.93679878003244 ] ] ] ] } },       { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.13281075656434, 45.937507327903141 ], [ 6.132811540684995, 45.937512671949321 ], [ 6.132903753273905, 45.937506782592266 ], [ 6.132903145580401, 45.937501043195077 ], [ 6.13281075656434, 45.937507327903141 ] ] ] ] } 
    }]
};

var geojsonDataEtage2 = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "salle": "24" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 6.132218592433576, 45.936723513388131 ], [ 6.132342978502976, 45.936718186750738 ], [ 6.132350944113331, 45.936783171692035 ], [ 6.132225945304675, 45.936788498323175 ], [ 6.132218592433576, 45.936723513388131 ] ] ] } },
        { "type": "Feature", "properties": { "salle": "23" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 6.132094512733808, 45.936727987763149 ], [ 6.132218592433576, 45.936723939519112 ], [ 6.132224719826159, 45.936788285257947 ], [ 6.132100946496017, 45.936793611888618 ], [ 6.132094512733808, 45.936727987763149 ] ] ] }
    }]
};

// Fonction de style par défaut
function getDefaultStyle() {
    return {
        color: "#16a34a",
        weight: 2,
        opacity: 1,
        fillColor: "#22c55e",
        fillOpacity: 0.4
    };
}

// Coordonnées et zoom de départ
var initialView = {
    center: [45.9368, 6.1322],
    zoom: 17
};

// Fonction d'interaction (survol et clic)
function onEachFeature(feature, layer) {
    var tooltip = L.tooltip({
        permanent: true,
        direction: "center",
        className: "leaflet-tooltip-custom"
    }).setContent(feature.properties.salle);

    layer.bindTooltip(tooltip);

    layer.on({
        mouseover: function(e) {
            e.target.setStyle({ fillColor: "#16a34a", color: "#15803d", fillOpacity: 0.7 });
        },
        mouseout: function(e) {
            e.target.setStyle(getDefaultStyle());
        },
        click: function(e) {
            map.fitBounds(e.target.getBounds());
        }
    });
}

// Définir les styles spécifiques pour les calques
var layerEtage1 = L.geoJSON(geojsonDataEtage1, { 
    style: getDefaultStyle, 
    onEachFeature: onEachFeature,
});

var layerEtage2 = L.geoJSON(geojsonDataEtage2, { 
    style: getDefaultStyle, 
    onEachFeature: onEachFeature,
});

var baseMaps = { "Étage 1": layerEtage1, "Étage 2": layerEtage2 };


L.control.layers(baseMaps, null, { 
    collapsed: false,
})
.addTo(map, true);
// Ajouter un contrôle des calques avec position personnalisée


// Gestion des labels en fonction du zoom
map.on('zoomend', function() {
    var currentZoom = map.getZoom();
    var showLabels = currentZoom >= 20; // Affiche les labels pour un zoom >= 20

    map.eachLayer(function(layer) {
        if (layer instanceof L.GeoJSON) {
            layer.eachLayer(function(subLayer) {
                if (subLayer.getTooltip()) {
                    if (showLabels) {
                        subLayer.openTooltip();
                    } else {
                        subLayer.closeTooltip();
                    }
                }
            });
        }
    });
});

// Géolocalisation
map.locate({setView: true, maxZoom: 16});

map.on('locationfound', function(e) {
    var radius = e.accuracy;
    
    // Création du marqueur à la position actuelle
    L.marker(e.latlng).addTo(map)
        .bindPopup("Vous êtes dans les " + radius + " m").openPopup();

    // Création d'un cercle autour de la position
    L.circle(e.latlng, {
        radius: radius,
        color: "#15803d",        // Couleur du contour du cercle
        fillColor: "#16a34a",     // Couleur de remplissage du cercle
        fillOpacity: 0.2         // Opacité du remplissage
    }).addTo(map);
});


// Définir un style de surbrillance
function getHighlightStyle() {
    return {
        color: "#eab308", // Jaune pour attirer l'attention
        weight: 3,
        opacity: 1,
        fillColor: "#facc15",
        fillOpacity: 0.7
    };
}

// Ajouter une barre de recherche avec surbrillance et basculement de calque
var searchControl = new L.Control.Search({
    layer: L.layerGroup([layerEtage1, layerEtage2]),
    propertyName: 'salle',
    initial: true,
    collapsed: false,
    position: 'topright',
    zoom: 21,
    marker: false,
    autocomplete: true,
    moveToLocation: function(latlng, title, map) {
        var foundLayer = null;

        // Trouver le calque contenant la salle recherchée
        [layerEtage1, layerEtage2].forEach(function(layer) {
            layer.eachLayer(function(subLayer) {
                if (subLayer.feature && subLayer.feature.properties.salle === title) {
                    foundLayer = subLayer;
                }
            });
        });

        if (foundLayer) {
            // Activer le calque correspondant si nécessaire
            var parentLayer = foundLayer.feature.properties.salle <= 20 ? layerEtage1 : layerEtage2;
            map.eachLayer(function(layer) {
                if (layer instanceof L.GeoJSON) {
                    map.removeLayer(layer);
                }
            });
            parentLayer.addTo(map);

            // Centrer et zoomer sur la salle trouvée
            map.setView(latlng, 21); // Centrer sur les coordonnées avec le zoom spécifié

            // Changer temporairement le style de la salle recherchée
            foundLayer.setStyle(getHighlightStyle());

            // Réinitialiser le style après 3 secondes
            setTimeout(function() {
                parentLayer.resetStyle(foundLayer);
            }, 3000);
        }
    }
});

// Ajouter le contrôle de recherche à la carte
map.addControl(searchControl);
document.querySelector('.leaflet-control-search input').placeholder = "Rechercher..."; // Personnaliser le placeholder
// Ajouter uniquement le calque de l'étage 1 au chargement
layerEtage1.addTo(map);