package org.maxkey.authz.cas.endpoint.response;

import java.util.ArrayList;
import java.util.HashMap;

import org.maxkey.authz.cas.endpoint.ticket.CasConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CasServiceResponse {
	final static Logger _logger = LoggerFactory.getLogger(CasServiceResponse.class);

	protected String code;
	protected String description;
	protected boolean result=false;
	protected String user;
	protected String ticket;
	protected String format=CasConstants.FORMAT_TYPE.XML;
	protected ArrayList<String >proxies=new ArrayList<String>();
	
	protected HashMap<String,ArrayList<String>>casAttributes=new HashMap<String,ArrayList<String>>();
	
	public CasServiceResponse() {
		
	}

	public String getCode() {
		return code;
	}

	public CasServiceResponse setAttribute(String attr,String value){
		if(casAttributes.containsKey(attr)){
			casAttributes.get(attr).add(value);
		}else{
			ArrayList<String> newList=new ArrayList<String>();
			newList.add(value);
			casAttributes.put(attr, newList);
		}
		return this;
	}
	public CasServiceResponse setProxy(String proxy){
		proxies.add(proxy);
		return this;
	}
	public CasServiceResponse setCode(String code) {
		this.code = code;
		return this;
	}

	public String getDescription() {
		return description;
	}

	public CasServiceResponse setDescription(String description) {
		this.description = description;
		return this;
	}
	
	public CasServiceResponse success(){
		result=true;
		return this;
	}
	
	public CasServiceResponse failure(){
		result=false;
		return this;
	}
	
	public String getUser() {
		return user;
	}

	public CasServiceResponse setUser(String user) {
		this.user = user;
		return this;
	}

	public String getTicket() {
		return ticket;
	}

	public CasServiceResponse setTicket(String ticket) {
		this.ticket = ticket;
		return this;
	}

	public String getFormat() {
		return format;
	}

	public CasServiceResponse setFormat(String format) {
		this.format = format;
		return this;
	}


	public String  serviceResponseBuilder(){
		return null;
	}

}
