package org.maxkey.domain;

import java.io.Serializable;


/*
   ID                   varchar(40)                    not null,
   APPROLEID            varchar(40)                    null,
   UID	                varchar(40)	                   null
   constraint PK_ROLES primary key clustered (ID)
 */
public class GroupMember extends UserInfo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8059639972590554760L;
	private String groupId;
	private String groupName;
	
	private String memberId;
	private String memberName;
	private String type;//User or Group
	

	
	
	public GroupMember(){
		super();
	}

	
	/**
	 * @param groupId
	 * @param memberId
	 * @param type
	 */
	public GroupMember(String groupId, String memberId, String type) {
		super();
		this.groupId = groupId;
		this.memberId = memberId;
		this.type = type;
	}


	public GroupMember(String groupId, String groupName, String memberId,
			String memberName, String type) {
		super();
		this.groupId = groupId;
		this.groupName = groupName;
		this.memberId = memberId;
		this.memberName = memberName;
		this.type = type;
	}


	/**
	 * @return the groupId
	 */
	public String getGroupId() {
		return groupId;
	}

	/**
	 * @param groupId the groupId to set
	 */
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	/**
	 * @return the memberId
	 */
	public String getMemberId() {
		return memberId;
	}

	/**
	 * @param memberId the memberId to set
	 */
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}


	/**
	 * @return the groupName
	 */
	public String getGroupName() {
		return groupName;
	}


	/**
	 * @param groupName the groupName to set
	 */
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}


	public String getMemberName() {
		return memberName;
	}


	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}


	@Override
	public String toString() {
		return "GroupMember [groupId=" + groupId + ", groupName=" + groupName
				+ ", memberId=" + memberId + ", memberName=" + memberName
				+ ", type=" + type + "]";
	}


}
