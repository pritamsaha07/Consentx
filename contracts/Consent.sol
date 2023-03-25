pragma solidity ^0.8.0;
// SPDX-License-Identifier: GPL-3.0
contract Consent {

    enum Status { None, Granted, Revoked }

    struct ConsentRecord {
        address holder;
        address issuer;
        address verifier;
        Status status;
    }

    mapping(uint256 => ConsentRecord) private consentRecords;

    
    function giveConsent(uint256 consentID,address holder, address issuer, address verifier) public {
        require(consentRecords[consentID].status == Status.None, "Consent already granted");
        consentRecords[consentID] = ConsentRecord(holder, issuer, verifier, Status.Granted);
    }

    function revokeConsent(uint256 consentID,address holder) public {
        require(consentRecords[consentID].status == Status.Granted, "Consent not granted");
        require(consentRecords[consentID].holder == holder, "Only holder can revoke consent");
        consentRecords[consentID].status = Status.Revoked;
    }

    function verifyConsent(uint consentID, address holder, address verifier) public view returns (bool) {
      
        if (consentRecords[consentID].status != Status.Granted) {
            return false;
        }
        if (consentRecords[consentID].holder != holder || consentRecords[consentID].verifier != verifier) {
            return false;
        }
        
        return true;
    }
}
