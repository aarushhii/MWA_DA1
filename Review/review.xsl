<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Book Reviews</title>
                <style>
                    /* CSS Styles */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f7f7f7;
                        margin: 0;
                        padding: 0;
                    }
                    header {
                        background-color: #640b93;
                        color: #fff;
                        padding: 15px;
                        text-align: center;
                    }
                    h1 {
                        font-size: 26px;
                    }
                    .review {
                        border: 1px solid #ddd;
                        margin: 10px;
                        padding: 10px;
                        background-color: #fff;
                    }
                    .book {
                        font-size: 20px;
                    }
                    .author {
                        color: #555;
                    }
                    .rating {
                        color: #007bff;
                    }
                    .comment {
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Book Reviews</h1>
                </header>
                <xsl:apply-templates select="reviews/review"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="review">
        <div class="review">
            <div class="book">
                <xsl:value-of select="book"/>
            </div>
            <div class="author">
                <xsl:value-of select="author"/>
            </div>
            <div class="rating">
                Rating: <xsl:value-of select="rating"/>
            </div>
            <div class="comment">
                <xsl:value-of select="comment"/>
            </div>
        </div>
    </xsl:template>

</xsl:stylesheet>
