package com.connsec.otp.algorithm;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import org.apache.commons.codec.binary.Hex;
import org.maxkey.crypto.Base32Utils;
import org.maxkey.crypto.HexUtils;
import org.maxkey.crypto.password.opt.algorithm.TimeBasedOTP;
/**
 * goole 
 * @author Crystal.Sea
 *
 */
public class TimeBasedOTPTest {

     public static void main(String[] args) {
    	 
    	 //byte[]byteseed=OPTSecret.generate();
    	 
    	
    	 byte[]byteseed= Base32Utils.decode("DCGAGPE2BCDBD6D3FG4NX2QGACVIHXP4");//HexUtils.hex2Bytes( "a1270caecf007f2303cc9db12597a9694ff541aa");
         String seed=Base32Utils.encode(byteseed);
         
         String hexString=Hex.encodeHexString(byteseed);
         //String hexString=HexUtils.bytes2HexString(byteseed);
         System.out.println(hexString);
         System.out.println(HexUtils.bytes2HexString(byteseed));

         
         DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
         df.setTimeZone(TimeZone.getTimeZone("UTC"));
         String utcTime = df.format(new Date());
         Date curr=null;
         try {
        	 curr=df.parse(utcTime);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
         long currentTimeSeconds = curr.getTime() / 1000;
         currentTimeSeconds =System.currentTimeMillis() / 1000;
         int INTERVAL = 30;
         
         System.out.println(utcTime);
         
         //google time based
    	 System.out.println(TimeBasedOTP.genOTP(hexString,Long.toHexString(currentTimeSeconds/INTERVAL).toUpperCase()+"","6"));
    	 //google counter based
    	 System.out.println(TimeBasedOTP.genOTP(hexString,3+"","6"));
    	
 
     }
	     

}