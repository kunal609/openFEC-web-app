'use strict';

var events = require('./events.js');

// http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
var toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var activateFilter = function() {
    if (typeof selectedFilters[this.name] !== 'undefined') {
        $('.selected-filter[data-field=' + this.name + ']').remove();            
    }

    selectedFilters[this.name] = this.value;

    events.emit('selected:filter', {
        field: this.name,
        value: this.value,
        category: $('#main').data('section'),
        filters: selectedFilters
    });

    addBox(this);
    addActiveStyle(this);
};

var bindFilters = function(e) {
    $('#candidate-filters select').chosen({width: "100%"});

    if (typeof e !== 'undefined' && typeof e.query !== 'undefined') {
        $('#candidate-filters').find('input[name=name]').val(e.query).parent().addClass('active');

        selectedFilters['name'] = e.query;
    }

    // make select boxes work
    $('#candidate-filters select').chosen().change(activateFilter);

    // make name filter work
    $('#candidate-filters input').on('input', function() {
        if ($('.add-filter').length === 0) {
            $(this).parent().append('<a class="add-filter">+</a>');
        }
    });

    // apply name filter
    $('#candidate-filters').on('click', '.add-filter', function() {
        activateFilter.call($(this).prev()[0]);
    });
};

var selectedFilters = {};

var addBox = function(e) {
   $('#selected-filters').append('<div class="selected-filter" data-field="' + e.name + '">' + toTitleCase(e.name) + ': ' + e.value + '<a class="close" href="">x</a></div>'); 
};

var addActiveStyle = function(field) {
    $(field).parent().addClass('active');
};

module.exports = {
    init: function() {
        events.on('bind:filters', bindFilters);

        // toggle filter drawer open/shut
        $('#main').on('click', '.filter-header-bar', function() {
            $('.filter-field-container').slideToggle();
        });

        // if loaded on a page with filters, init chosen
        $('#candidate-filters select').chosen({width: "100%"});

        bindFilters();

        // close tag boxes
        $('#selected-filters').on('click', '.close', function(e) {
            e.preventDefault();

            var $box = $(event.target).parent();
            delete selectedFilters[$box.data('field')];
            $box.remove();

            events.emit('removed:filter', {
                category: $('#main').data('section'),
                filters: selectedFilters
            });
        });
    }
};
