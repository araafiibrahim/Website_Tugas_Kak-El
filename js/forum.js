document.addEventListener("DOMContentLoaded", function () {

    const sendButton =
        document.getElementById("sendButton");

    const messageInput =
        document.getElementById("messageInput");

    const chatBody =
        document.getElementById("chatBody");

    const attachmentButton =
        document.getElementById("attachmentButton");

    const fileInput =
        document.getElementById("fileInput");

    const uploadPreview =
        document.getElementById("uploadPreview");

    const previewImage =
        document.getElementById("previewImage");

    const removeImage =
        document.getElementById("removeImage");

    const discussionSearch =
        document.getElementById("discussionSearch");


    /* =============================
       KIRIM PESAN
    ============================= */

    function sendMessage() {

        const text =
            messageInput.value.trim();

        if (
            text === "" &&
            fileInput.files.length === 0
        ) {

            return;

        }


        const message =
            document.createElement("div");

        message.classList.add(
            "message",
            "right"
        );


        const wrapper =
            document.createElement("div");

        wrapper.classList.add(
            "message-wrapper"
        );


        const user =
            document.createElement("div");

        user.classList.add(
            "message-user",
            "own-user"
        );

        user.innerHTML = `
            Anda
            <span>Cabang Saya</span>
        `;


        const bubble =
            document.createElement("div");

        bubble.classList.add("bubble");


        if (text !== "") {

            const paragraph =
                document.createElement("p");

            paragraph.textContent =
                text;

            bubble.appendChild(
                paragraph
            );

        }


        /* IMAGE */

        if (
            fileInput.files.length > 0
        ) {

            const img =
                document.createElement("img");

            img.src =
                URL.createObjectURL(
                    fileInput.files[0]
                );

            img.style.width =
                "280px";

            img.style.maxWidth =
                "100%";

            img.style.marginTop =
                "10px";

            img.style.borderRadius =
                "10px";

            bubble.appendChild(img);

        }


        /* TIME */

        const time =
            new Date()
            .toLocaleTimeString(
                "id-ID",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        const footer =
            document.createElement("div");

        footer.classList.add(
            "message-footer"
        );

        footer.innerHTML = `
            <span>${time}</span>
            <i class="fa-solid fa-check-double"></i>
        `;


        bubble.appendChild(
            footer
        );


        wrapper.appendChild(
            user
        );

        wrapper.appendChild(
            bubble
        );


        /* AVATAR */

        const avatar =
            document.createElement("div");

        avatar.classList.add(
            "avatar",
            "avatar-blue"
        );

        avatar.textContent =
            "A";


        message.appendChild(
            wrapper
        );

        message.appendChild(
            avatar
        );


        chatBody.appendChild(
            message
        );


        /* RESET */

        messageInput.value =
            "";

        fileInput.value =
            "";

        uploadPreview.style.display =
            "none";


        /* SCROLL */

        chatBody.scrollTop =
            chatBody.scrollHeight;

    }


    sendButton.addEventListener(
        "click",
        sendMessage
    );


    /* ENTER SEND */

    messageInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );


    /* =============================
       AUTO RESIZE TEXTAREA
    ============================= */

    messageInput.addEventListener(
        "input",
        function () {

            this.style.height =
                "auto";

            this.style.height =
                Math.min(
                    this.scrollHeight,
                    110
                ) + "px";

        }
    );


    /* =============================
       ATTACHMENT
    ============================= */

    attachmentButton.addEventListener(
        "click",
        function () {

            fileInput.click();

        }
    );


    fileInput.addEventListener(
        "change",
        function () {

            if (
                this.files &&
                this.files[0]
            ) {

                const reader =
                    new FileReader();


                reader.onload =
                    function (event) {

                        previewImage.src =
                            event.target.result;

                        uploadPreview.style.display =
                            "block";

                    };


                reader.readAsDataURL(
                    this.files[0]
                );

            }

        }
    );


    /* REMOVE IMAGE */

    removeImage.addEventListener(
        "click",
        function () {

            fileInput.value =
                "";

            uploadPreview.style.display =
                "none";

        }
    );


    /* =============================
       SEARCH DISCUSSION
    ============================= */

    discussionSearch.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                .toLowerCase()
                .trim();


            const items =
                document.querySelectorAll(
                    ".chat-item"
                );


            items.forEach(
                function (item) {

                    const searchable =
                        item.dataset.search
                        .toLowerCase();


                    if (
                        searchable.includes(
                            keyword
                        )
                    ) {

                        item.style.display =
                            "flex";

                    }

                    else {

                        item.style.display =
                            "none";

                    }

                }
            );

        }
    );


    /* =============================
       ACTIVE DISCUSSION
    ============================= */

    const chatItems =
        document.querySelectorAll(
            ".chat-item"
        );


    chatItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    chatItems.forEach(
                        function (other) {

                            other.classList
                                .remove(
                                    "active"
                                );

                        }
                    );


                    this.classList.add(
                        "active"
                    );


                    const unread =
                        this.querySelector(
                            ".unread"
                        );


                    if (unread) {

                        unread.style.display =
                            "none";

                    }

                }
            );

        }
    );


    /* =============================
       REACTION
    ============================= */

    document
        .querySelectorAll(
            ".reaction-bar button"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        this.classList
                            .toggle(
                                "reaction-active"
                            );

                    }
                );

            }
        );


    /* INITIAL SCROLL */

    chatBody.scrollTop =
        chatBody.scrollHeight;

});