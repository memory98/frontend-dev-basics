package ch08.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="response")
public class XmlResult {
	private String result; 	/* success or fail */
	private GuestbookVo data;	/* if success, set */
	private String message; /* if fail, set */
	
	public XmlResult() {
	}
	
	private XmlResult(GuestbookVo data) {
		this.result = "success";
		this.data = data;
	}
	
	private XmlResult(String message) {
		this.result = "fail";
		this.message = message;
	}
	
	public void setResult(String result) {
		this.result = result;
	}

	public void setData(GuestbookVo data) {
		this.data = data;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getResult() {
		return result;
	}

	public GuestbookVo getData() {
		return data;
	}

	public String getMessage() {
		return message;
	}
	
	public static XmlResult success(GuestbookVo vo) {
		return new XmlResult(vo);
	}
	
	public static XmlResult fail(String message) {
		return new XmlResult(message);
	}
	
	@XmlRootElement(name="data")
	public static class GuestbookVo {
		private Long no;
		private String name;
		private String password;
		private String message;
		private String regDate;

		public Long getNo() {
			return no;
		}

		public void setNo(Long no) {
			this.no = no;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public String getReg_date() {
			return regDate;
		}

		public void setReg_date(String reg_date) {
			this.regDate = reg_date;
		}
	}
}