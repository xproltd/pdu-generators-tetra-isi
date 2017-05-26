//Function returns idx:th element from a comma separated list of elements
//Leading and trailing white spaces are removed  
function GetValue(elems,idx)
{
    elem_list = elems.split(",");
    elem = elem_list[idx];	  		
    return elem.replace(/^\s+|\s+$/g, '');
}	  
	  	  
	  	  	   
function bin2hex(bin_value, wrap_at)
{
    while((bin_value.length%8) != 0)
        bin_value += "0";
        
    bin_length = bin_value.length;
    
    if ((bin_length % 8) > 0)
    {
	    for (i=0; i<(8-(bin_length%8));i++)
	        bin_value += "0";
    }
    
    hex_value="";
    hex_length = 0;
    
    for (i=0; i<bin_length; i+=4)
    {
	    quartet = bin_value.substring(i,4+i)
    	
	    if (quartet=="0000")
		    hex_value += "0";
	    if (quartet=="0001")
		    hex_value += "1";
	    if (quartet=="0010")
		    hex_value += "2";
	    if (quartet=="0011")
		    hex_value += "3";
	    if (quartet=="0100")
		    hex_value += "4";
	    if (quartet=="0101")
		    hex_value += "5";
	    if (quartet=="0110")
		    hex_value += "6";
	    if (quartet=="0111")
		    hex_value += "7";
	    if (quartet=="1000")
		    hex_value += "8";
	    if (quartet=="1001")
		    hex_value += "9";
	    if (quartet=="1010")
		    hex_value += "A";
	    if (quartet=="1011")
		    hex_value += "B";
	    if (quartet=="1100")
		    hex_value += "C";
	    if (quartet=="1101")
		    hex_value += "D";
	    if (quartet=="1110")
		    hex_value += "E";
	    if (quartet=="1111")
		    hex_value += "F";
	                        
	    hex_length += 1;
	    
	    if ((hex_length %2) == 0)
		    hex_value += " ";
		
    }

    //alert(bin_length + ":" + bin_length/8 + ":" + bin_length%8);
    
    //if ((bin_length%8) > 0)	
	  //  hex_value += "0";

    //if ((hex_value.length%3) > 0)	
	  //  hex_value += "0";

    return hex_value;
}

function hex2bin(hex_value)
{
	hex_length = hex_value.length;
	bin_value ='';
		
	for (i=0; i<hex_length; i+=1)
	{
		digit = hex_value.substring(i,1+i)
		
		if (digit == '0')
			bin_value += "0000";
		if (digit == '1')
			bin_value += "0001";
		if (digit == '2')
			bin_value += "0010";
		if (digit == '3')        
			bin_value += "0011";
		if (digit == '4')        
			bin_value += "0100";
		if (digit == '5')        
			bin_value += "0101";
		if (digit == '6')        
			bin_value += "0110";
		if (digit == '7')        
			bin_value += "0111";
		if (digit == '8')        
			bin_value += "1000";
		if (digit == '9')        
			bin_value += "1001";
		if (digit == 'a')        
			bin_value += "1010";
		if (digit == 'b')        
			bin_value += "1011";
		if (digit == 'c')        
			bin_value += "1100";
		if (digit == 'd')        
			bin_value += "1101";
		if (digit == 'e')        
			bin_value += "1110";
		if (digit == 'f')        
			bin_value += "1111";
		if (digit == 'A')        
			bin_value += "1010";
		if (digit == 'B')        
			bin_value += "1011";
		if (digit == 'C')        
			bin_value += "1100";
		if (digit == 'D')        
			bin_value += "1101";
		if (digit == 'E')        
			bin_value += "1110";
		if (digit == 'F')        
			bin_value += "1111";
	}	                       
	
	return bin_value;
}

function digit2bin(digit_value)
{
	digit_length = digit_value.length;
	bin_value ='';
		
	for (i=0; i<digit_length; i+=1)
	{
		digit = digit_value.substring(i,1+i)
		
		if (digit == '0')
			bin_value += "0000";
		if (digit == '1')
			bin_value += "0001";
		if (digit == '2')
			bin_value += "0010";
		if (digit == '3')        
			bin_value += "0011";
		if (digit == '4')        
			bin_value += "0100";
		if (digit == '5')        
			bin_value += "0101";
		if (digit == '6')        
			bin_value += "0110";
		if (digit == '7')        
			bin_value += "0111";
		if (digit == '8')        
			bin_value += "1000";
		if (digit == '9')        
			bin_value += "1001";
		if (digit == '*')        
			bin_value += "1010";
		if (digit == '#')        
			bin_value += "1011";
		if (digit == '+')        
			bin_value += "1100";
	}	                       
	
	return bin_value;
}

function dec2bin(dec_value,bit_length)
{
    bin_value = "";
    remainder = 1;
    while (dec_value != 0)
    {
        reminder = dec_value % 2;
        bin_value = reminder + bin_value;
        dec_value = Math.floor(dec_value/2);
    }
    if (bin_value.length < bit_length)
    {
        while (bin_value.length<bit_length)
        {
	        bin_value = "0" + bin_value;
        }
    }
    else if (bin_value.length > bit_length)
    {
        bin_value = "dec2bin conversion failed, resolution too short!";
    }
	
	return bin_value;
}

function text2hex(text_value)
{
    var text_char = 0;
    var hex_char = "";
		
    hex_value = "";

	text_length = text_value.length;    
	for (i=0; i<text_length; i+=1)
	{
		text_char = text_ascii_value(text_value,i);
		hex_char = text_char;
		
		hex_value += hex_char;
    }
    return hex_value;
}

function text2bin(text_value)
{
    //return text_value;
    //return text2hex(text_value);
    return hex2bin(text2hex(text_value));
}

function WrapHexdump(hexdump, wrap_at) 
{
    result = '';
    wrap_at *= 3;
    while (hexdump.length > 0) 
    {

        result += hexdump.substring(0,wrap_at) + '\n';
        hexdump = hexdump.substring(wrap_at);
    }
    return result;
}

function OnEnableDisable_Ctrl(ctrl_stat,ctrl_val)
{
    if (ctrl_stat.value != "0")
    {
        ctrl_val.disabled = false;
        ctrl_val.disabled = false;
    }
    else
    {
        ctrl_val.disabled = true;
        ctrl_val.disabled = true;
    }
    
}    

function text_ascii_value(c,idx)
{
	// restrict input to a single character
	c = c.charAt(idx);

	// loop through all possible ASCII values
	var i;
	for (i = 0; i < 256; ++ i)
	{
		// convert i into a 2-digit hex string
		var h = i.toString(16);
		if (h.length == 1)
			h = "0" + h;

		// insert a % character into the string
		h = "%" + h;

		// determine the character represented by the escape code
		h = unescape (h);

		// if the characters match, we've found the ASCII value
		if (h == c)
			break;
	}
	
	return i.toString(16);
}

function WriteToFile(filename, text) 
{
    try 
    {
        var fso, s;
        fso = new ActiveXObject("Scripting.FileSystemObject");
        s = fso.OpenTextFile(filename , 8, 1, -2);
        s.writeline(text);
        s.Close();
    }
    catch(err)
    {
        var strErr = 'Error:';
        strErr += '\nNumber:' + err.number;
        strErr += '\nDescription:' + err.description;
        alert(strErr);
    }
}


function autoResize(id)
{
    var newheight;
    var newwidth;

    if (document.getElementById)
    {
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height= (newheight) + "px";
    document.getElementById(id).width= (newwidth) + "px";
}

function Autosize_IFrame(ctrl)
{
    ctrl.height = ctrl.contentWindow.document.getElementById("Form1").offsetHeight + 20;                
}

function tlv_encode(tag_PC,tag_Class,tag_Id,tag_Length,tag_Value,bit_string)
{    
    tlv_value = "";
    if (tag_Class == "U")
        tlv_value += "00";
    else
    if (tag_Class == "A")
        tlv_value += "01";
    else
    if (tag_Class == "C")
        tlv_value += "10";
    else
    if (tag_Class == "P")
        tlv_value += "11";
    else
        return "tlv_encode(error=tag_Class)";
    
    if (tag_PC == "P")
        tlv_value += "0";
    else
    if (tag_PC == "C")
        tlv_value += "1";
    else
        return "tlv_encode(error=tag_PC)";

    if (tag_Id <= 30)
    {
        tlv_value += dec2bin(tag_Id,5);
    }
    else
    {
        tlv_value += "11111";

        tag_id_enc = "";
        tag_id_cnt = 0;
        while (tag_Id != 0)
        {
            tag_id_byte = dec2bin(tag_Id & 0x7F,7);
            if (tag_id_cnt == 0)
                tag_id_byte = "0" + tag_id_byte;
            else
                tag_id_byte = "1" + tag_id_byte;
            tag_id_enc = tag_id_byte + tag_id_enc;
            tag_id_cnt++;
            tag_Id = tag_Id >> 7;
        }

        tlv_value += tag_id_enc;
    }

    /*Length  is length in bytes */

    if (tag_PC == "P")
       if (tag_Class == "U")
          if (tag_Id == 5) //NULL
             tag_Length = 0;
    
    if (tag_Length <= 127)
    {
         tlv_value += "0" + dec2bin(tag_Length,7);
    }
    else
    {
        tag_Length_enc = "";
        tag_Length_loc = tag_Length;
        tag_Length_cnt = 0;
        
        tag_Length_octets = 0;
        if (tag_Length < 256)
            tag_Length_octets = 1;
        else
        if (tag_Length < (256*256))
            tag_Length_octets = 2;
        else
        if (tag_Length < (256*256*256))
            tag_Length_octets = 3;
        else
        if (tag_Length < (256*256*256*256))
            tag_Length_octets = 4;
        
        for (tag_Length_cnt = 0; tag_Length_cnt < tag_Length_octets; tag_Length_cnt++)
        {
            tag_Length_enc = dec2bin(tag_Length_loc & 0xFF,8) + tag_Length_enc;
            tag_Length_loc = tag_Length_loc >> 8;
        }

        tag_Length_enc = "1" + dec2bin(tag_Length_octets,7) + tag_Length_enc;

        tlv_value += tag_Length_enc;
    }
    
    if (tag_PC == "P")
    {
        if (tag_Class == "U")
        {
            if (tag_Id == "5") //NULL
                tlv_value += "";
            else
            if (tag_Id == "1") //Boolean
                tlv_value += dec2bin(tag_Value,tag_Length * 8);
            else
            if (tag_Id == "2") //Integer
                tlv_value += dec2bin(tag_Value,tag_Length * 8);
            else
            if ((tag_Id == "4") || (tag_Id == "18") || (tag_Id == "19") || (tag_Id == "20") || (tag_Id == "21") || (tag_Id == "22")  || (tag_Id == "25") || (tag_Id == "26") || (tag_Id == "27"))
                tlv_value += text2bin(tag_Value);
            else
            if (tag_Id == "6") //Opcode
               tlv_value += hex2bin(tag_Value);
                
        }
        else
        if (tag_Class == "C")
        {
            if ((bit_string != undefined) && bit_string != "")
                tlv_value += tag_Value;
            else
                tlv_value += dec2bin(tag_Value,tag_Length * 8);
        }
        
    }
    else
    if (tag_PC == "C")
    {
        while (tag_Value.length < tag_Length * 8)
        {
	        tag_Value = "0" + tag_Value;
        }
        tlv_value += tag_Value;
    }

    return tlv_value;
}

function tlv_encode_null()
{
    return tlv_encode("P", "U", 5/*integer*/, 0/*byte*/, "");
}

function Q_IE_Var(id,length,value)
{
    var ie_value = "0";
    ie_value += dec2bin(id, 7);
    ie_value += dec2bin(length, 8);

    //var bin_length = parseInt(length, 10);
    var bin_value_length = length * 8;
    while (value.length < bin_value_length)
        value = "0" + value;
    ie_value += value;

    return ie_value;
}

function GetPDU_QSig_Facility(entity,tetraMessage)
{

    PD              = "8";/* Q.931 User-Network Call Control */
    Connection_Mode = "5";/* Supplementary service control */
    Call_Ref        = "333";

    QSIG_pdu_header = "";
    QSIG_pdu_value = "";
    
    QSIG_pdu_header += dec2bin(PD,8);
    QSIG_pdu_header += "0000";//Reserved
    QSIG_pdu_header += "0010";//Call Reference length
    QSIG_pdu_header += "0";//Originator
    QSIG_pdu_header += dec2bin(Call_Ref,15);
    QSIG_pdu_header += "0";//Reserved
    
    QSIG_pdu_header += "1100010";/*Q-FACILITY*/
    

    ie_fac_value = "";
    
    Protocol_Profile = "17";/* ROSE */
    ie_fac_value += "100" + dec2bin(Protocol_Profile, 5);
    
    ROSE_OP_invoke_invokeId_Type = "1";//invokeId
    ROSE_OP_invoke_invokeId_Num = "3264";
    ROSE_OP_invoke_opcode = "0400830800"; /*0.4.0.392.0*/
    ROSE_OP_invoke_argument_sourceEntity = entity;
    ROSE_OP_invoke_argument_destinationEntity = entity;
    ROSE_OP_invoke_argument_tetraMessage = tetraMessage;

    tlv_member = "";
    tlv_member += tlv_encode("P", "U", 2/*integer*/, 2/*byte*/, ROSE_OP_invoke_invokeId_Num);
    tlv_member += tlv_encode("P", "U", 6/*opcode*/, ROSE_OP_invoke_opcode.length / 2, ROSE_OP_invoke_opcode);

    tlv_member_argument = "";
    tlv_member_argument += tlv_encode("P", "C", 0, 1/*byte*/, ROSE_OP_invoke_argument_sourceEntity);
    tlv_member_argument += tlv_encode("P", "C", 1, 1/*byte*/, ROSE_OP_invoke_argument_destinationEntity);
    
    ROSE_OP_invoke_argument_tetraMessage = hex2bin(ROSE_OP_invoke_argument_tetraMessage);
    tlv_member_argument += tlv_encode("P", "C", 2, ROSE_OP_invoke_argument_tetraMessage.length / 8, ROSE_OP_invoke_argument_tetraMessage,"bitstring");

    tlv_member += tlv_encode("C", "U", 16/*sequence*/, tlv_member_argument.length / 8/*byte*/, tlv_member_argument);

    tlv_member = tlv_encode("C", "C", 1/*id*/, tlv_member.length / 8/*byte*/, tlv_member);
    
    ie_ROSE_value = tlv_member;
    
    ie_fac_value += ie_ROSE_value;
    
    ie_value = Q_IE_Var(28, ie_fac_value.length / 8, ie_fac_value);

    return bin2hex(QSIG_pdu_header + ie_value);
}

function GetPDU_ROSE(entity,tetraMessage)
{
    ROSE_OP_invoke_invokeId_Type = "1";//invokeId
    ROSE_OP_invoke_invokeId_Num = "3264";
    ROSE_OP_invoke_opcode = "0400830800"; /*0.4.0.392.0*/
    ROSE_OP_invoke_argument_sourceEntity = entity;
    ROSE_OP_invoke_argument_destinationEntity = entity;
    ROSE_OP_invoke_argument_tetraMessage = tetraMessage;

    tlv_member = "";
    tlv_member += tlv_encode("P", "U", 2/*integer*/, 2/*byte*/, ROSE_OP_invoke_invokeId_Num);
    tlv_member += tlv_encode("P", "U", 6/*opcode*/, ROSE_OP_invoke_opcode.length / 2, ROSE_OP_invoke_opcode);

    tlv_member_argument = "";
    tlv_member_argument += tlv_encode("P", "C", 0, 1/*byte*/, ROSE_OP_invoke_argument_sourceEntity);
    tlv_member_argument += tlv_encode("P", "C", 1, 1/*byte*/, ROSE_OP_invoke_argument_destinationEntity);
    
    ROSE_OP_invoke_argument_tetraMessage = hex2bin(ROSE_OP_invoke_argument_tetraMessage);
    tlv_member_argument += tlv_encode("P", "C", 2, ROSE_OP_invoke_argument_tetraMessage.length / 8, ROSE_OP_invoke_argument_tetraMessage,"bitstring");

    tlv_member += tlv_encode("C", "U", 16/*sequence*/, tlv_member_argument.length / 8/*byte*/, tlv_member_argument);

    tlv_member = tlv_encode("C", "C", 1/*id*/, tlv_member.length / 8/*byte*/, tlv_member);
    
    ie_ROSE_value = tlv_member;
    
    return bin2hex(ie_ROSE_value);
}

function GetPDU_SIP_Header_Content()
{
    sip_header = 
        'INVITE sip:user@192.168.0.200:5060 SIP/2.0\r\n' +
        'Via: SIP/2.0/TCP 192.168.0.100:5060;branch=z9hG4bKaddb1e4f8b2f\r\n' +
        'From: user <sip:user@192.168.0.100:5060>;tag=5-6506649a-00000001\r\n' +
        'To: user <sip:user@192.168.0.200:5060>\r\n' +
        'Contact: user <sip:user@192.168.0.100:5060>\r\n' +
        'Recv-Info: ISI\r\n' +
        'Call-ID: 65066499093b66c81@192.168.0.100\r\n' +
        'Accept: application/sdp, application/ISI, multipart/mixed\r\n' +
        'Supported: timer\r\n' +
        'Session-Expires: 90\r\n' +
        'Min-SE: 90\r\n' +
        'Allow: INVITE, BYE, ACK, CANCEL, INFO, OPTIONS\r\n' +
        'CSeq: 1 INVITE\r\n' +
        'Max-Forwards: 70\r\n' +
        'Content-Type: <content_type>\r\n' +
        'Content-Length: <content_length>\r\n';        

    return sip_header;

}

function GetPDU_SIP_SDP_Content()
{
    sip_sdp = 
        'Content-Type: application/sdp\r\n' +
        '\r\n' +
        'v=0\r\n' +
        'o=- 234567890 234567890 IN IP4 192.168.0.100\r\n' +
        's=549755813888\r\n' +
        'c=IN IP4 192.168.0.100\r\n' +
        't=0 0\r\n' +
        'm=audio 45678 RTP/AVP 96 97 98\r\n' +
        'a=rtpmap:96 TETRA-ACELP/8000\r\n' +
        'a=rtpmap:97 vnd.some-TETRA-vendor.codec/8000\r\n' +
        'a=rtpmap:98 x.private.codec/8000\r\n' +
        'a=sendrecv\r\n';
        
    return sip_sdp;
}

function GetPDU_by_Protocol(Protocol_Enc, Protocol_ISI)
{
    /*Protocol = document.getElementById('Protocol').value;   */
    if (Protocol_Enc == "0") 
        return GetPDU_Hex();
    else                 
    if (Protocol_Enc == "1") 
    {
        isi_pdu_header = GetValue(document.getElementById('ISI_PDU_type').value,1);
        pdu_bin_value = document.getElementById("ISI_Proto_IFrame").contentWindow.GetPDUValue(isi_pdu_header);
        pdu_hex_value = document.getElementById('UserHeader').value + bin2hex(pdu_bin_value)
        return GetPDU_QSig_Facility(Protocol_ISI,pdu_hex_value);
    }
    else                 
    if (Protocol_Enc == "2") 
    {
        sip_header = GetPDU_SIP_Header_Content();
        sip_header = sip_header.replace("<content_type>","application/ISI");
        
        isi_pdu_header = GetValue(document.getElementById('ISI_PDU_type').value,1);
        pdu_bin_value = document.getElementById("ISI_Proto_IFrame").contentWindow.GetPDUValue(isi_pdu_header);
        pdu_hex_value = document.getElementById('UserHeader').value + bin2hex(pdu_bin_value)
        
        isi_rose = GetPDU_ROSE(Protocol_ISI,pdu_hex_value);
        
        isi_content_length = isi_rose.length / 3;
        sip_header = sip_header.replace("<content_length>",isi_content_length.toString());
        
        isi_rose_wrapped = WrapHexdump(isi_rose,16);
        
        return sip_header + "\r\n" + isi_rose_wrapped;
    }
    else                 
    if (Protocol_Enc == "3") 
    {
        boundary = "tetra";
        sip_header = GetPDU_SIP_Header_Content();
        sip_header = sip_header.replace("<content_type>","multipart/mixed; boundary=\"" + boundary + "\"");
        boundary = "--" + boundary;
        
        sdp_content = GetPDU_SIP_SDP_Content();
        
        isi_pdu_header = GetValue(document.getElementById('ISI_PDU_type').value,1);
        pdu_bin_value = document.getElementById("ISI_Proto_IFrame").contentWindow.GetPDUValue(isi_pdu_header);
        pdu_hex_value = document.getElementById('UserHeader').value + bin2hex(pdu_bin_value)
        
        isi_rose = "Content-Type: application/ISI\r\n\r\n"
        isi_rose_length = isi_rose.length;
                            
        isi_rose_pdu = GetPDU_ROSE(Protocol_ISI,pdu_hex_value);                    
        isi_rose_length += isi_rose_pdu.length / 3;                    
        
        isi_rose += WrapHexdump(isi_rose_pdu,16);
        
        sip_msg = "\r\n";/* This is not included in the length */
        sip_msg += "--tetra\r\n" + sdp_content;
        sip_msg += "--tetra\r\n" + isi_rose;
        sip_msg += "--tetra--"
        
        sip_body_length = boundary.length + 2/*\r\n*/ + sdp_content.length + 
                          boundary.length + 2/*\r\n*/ + isi_rose_length + 
                          boundary.length + 2;
        
        sip_header = sip_header.replace("<content_length>",sip_body_length.toString());
        sip_msg = sip_header + sip_msg;
        
        return sip_msg;
    }
    return "";
}










