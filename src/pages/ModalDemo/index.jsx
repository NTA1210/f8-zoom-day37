import classNames from "classnames/bind";
import { useState } from "react";

//scss
import styles from "./ModalDemo.module.scss";

// Comp
import { Modal } from "../../components";

const cx = classNames.bind(styles);

function ModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <p>
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
      </p>

      <Modal
        isOpen={isModalOpen}
        onAfterOpen={() => console.log("Modal đã mở")}
        onAfterClose={() => console.log("Modal đã đóng")}
        onRequestClose={() => setIsModalOpen(false)}
        closeTimeoutMS={300}
        overlayClassName={cx("custom-overlay")}
        className={cx("custom-modal")}
        bodyOpenClassName={cx("modal-open")}
        htmlOpenClassName={cx("modal-open")}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <div className={cx("content")}>
          <p>Đây là nội dung modal</p>
          <button onClick={() => setIsModalOpen(false)}>Đóng</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDemo;
