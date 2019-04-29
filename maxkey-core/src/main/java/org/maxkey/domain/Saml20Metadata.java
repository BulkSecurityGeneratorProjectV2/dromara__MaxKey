package org.maxkey.domain;

import java.io.Serializable;

import org.apache.mybatis.jpa.persistence.JpaBaseDomain;



/**
 * @author Crystal.Sea
 *
 */
public class Saml20Metadata   extends JpaBaseDomain implements Serializable{

	public final static class ContactPersonType{
		public final static  String TECHNICAL="technical";
		public final static  String SUPPORT="support";
		public final static  String ADMINISTRATIVE="administrative";
		public final static  String BILLING="billing";
		public final static  String OTHER="other";
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -403743150268165622L;

	
	private String orgName;
	private String orgDisplayName;
	private String orgURL;
	private String contactType;
	private String company;
	private String givenName;
	private String surName;
	private String emailAddress;
	private String telephoneNumber;
	/**
	 * 
	 */
	public Saml20Metadata() {
		super();

	}
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	public String getOrgDisplayName() {
		return orgDisplayName;
	}
	public void setOrgDisplayName(String orgDisplayName) {
		this.orgDisplayName = orgDisplayName;
	}
	public String getOrgURL() {
		return orgURL;
	}
	public void setOrgURL(String orgURL) {
		this.orgURL = orgURL;
	}
	public String getContactType() {
		return contactType;
	}
	public void setContactType(String contactType) {
		this.contactType = contactType;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getGivenName() {
		return givenName;
	}
	public void setGivenName(String givenName) {
		this.givenName = givenName;
	}
	public String getSurName() {
		return surName;
	}
	public void setSurName(String surName) {
		this.surName = surName;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getTelephoneNumber() {
		return telephoneNumber;
	}
	public void setTelephoneNumber(String telephoneNumber) {
		this.telephoneNumber = telephoneNumber;
	}
	@Override
	public String toString() {
		return "Saml20Metadata [orgName=" + orgName + ", orgDisplayName="
				+ orgDisplayName + ", orgURL=" + orgURL + ", contactType="
				+ contactType + ", company=" + company + ", givenName="
				+ givenName + ", surName=" + surName + ", emailAddress="
				+ emailAddress + ", telephoneNumber=" + telephoneNumber + "]";
	}
	
	
}
