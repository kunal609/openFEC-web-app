module.exports = {
    init: function() {
        var $ = require('jquery'),
            mockjax = require('jquery-mockjax');

        $.mockjax({
            url: 'rest/committee?q=smith&per_page=5',
            responseText: {
                "api_version": "0.2", 
                "pagination": {
                    "count": 2, 
                    "page": 1, 
                    "pages": 1, 
                    "per_page": 2
                }, 
                "results": [
                    {
                        "address": {
                            "city": "BIRMINGHAM", 
                            "expire_date": "2014-09-18 00:00:00", 
                            "state": "AL", 
                            "state_full": "Alabama", 
                            "street_1": "PO BOX 11514", 
                            "zip": "35202"
                        }, 
                        "candidates": [
                            {
                                "designation": "P", 
                                "designation_full": "Principal campaign committee", 
                                "election_years": [
                                    1984
                                ], 
                                "expire_date": null, 
                                "link_date": "2007-10-12 13:38:33", 
                                "type": "H", 
                                "type_full": "House"
                            }
                        ], 
                        "committee_id": "C00187815", 
                        "description": {
                            "expire_date": "2014-09-18 00:00:00", 
                            "filing_frequency": "Q", 
                            "form_type": "F1", 
                            "load_date": "2014-09-18 13:28:50", 
                            "name": "STEVE SMITH FOR CONGRESS COMMITTEE"
                        }, 
                        "expire_date": null, 
                        "form_type": "F1", 
                        "load_date": "2014-09-18 13:28:42", 
                        "name": "STEVE SMITH FOR CONGRESS COMMITTEE", 
                        "status": {
                            "designation": "P", 
                            "designation_full": "Principal campaign committee", 
                            "expire_date": null, 
                            "load_date": "2014-09-18 13:28:46", 
                            "receipt_date": "1984-07-19 00:00:00", 
                            "type": "H", 
                            "type_full": "House"
                        }, 
                        "treasurer": {
                            "expire_date": "2014-09-18 00:00:00", 
                            "name_full": "KATHRYN HODGES"
                        }
                    }, 
                    {
                        "address": {
                            "city": "PALATINE", 
                            "expire_date": "2014-09-18 00:00:00", 
                            "state": "IL", 
                            "state_full": "Illinois", 
                            "street_1": "287 N NORTHWEST HIGHWAY", 
                            "zip": "60067"
                        }, 
                        "candidates": [
                            {
                                "designation": "P", 
                                "designation_full": "Principal campaign committee", 
                                "election_years": [
                                    1992
                                ], 
                                "expire_date": null, 
                                "link_date": "2007-10-12 13:38:33", 
                                "type": "H", 
                                "type_full": "House"
                            }
                        ], 
                        "committee_id": "C00268003", 
                        "description": {
                            "expire_date": "2014-09-18 00:00:00", 
                            "filing_frequency": "Q", 
                            "form_type": "F1", 
                            "load_date": "2014-09-18 13:28:50", 
                            "name": "SMITH FOR CONGRESS"
                        }, 
                        "expire_date": null, 
                        "form_type": "F1", 
                        "load_date": "2014-09-18 13:28:42", 
                        "name": "SMITH FOR CONGRESS", 
                        "status": {
                            "designation": "P", 
                            "designation_full": "Principal campaign committee", 
                            "expire_date": null, 
                            "load_date": "2014-09-18 13:28:46", 
                            "receipt_date": "1992-05-15 00:00:00", 
                            "type": "H", 
                            "type_full": "House"
                        }, 
                        "treasurer": {
                            "expire_date": "2014-09-18 00:00:00", 
                            "name_full": "CATHERINE C LAMB-HEINZ"
                        }
                    }
                ]
            }
        });
    }
}
