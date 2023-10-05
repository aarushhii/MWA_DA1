<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Online Bookstore</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f7f7f7;
                        margin: 0;
                        padding: 0;
                    }
                    header {
                        background-color: #640b93;
                        color: #fff;
                        padding: 20px;
                        text-align: center;
                    }
                    h1 {
                        font-size: 26px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        background-color: #fff;
                    }
                    th, td {
                        padding: 12px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #E0B0FF;
                        color: #000;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Books in Our Online Bookstore</h1>
                </header>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Published Year</th>
                        <th>ISBN</th>
                        <th>Format</th>
                    </tr>
                    <xsl:for-each select="bookstore/book">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="author"/></td>
                            <td><xsl:value-of select="genre"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="published-year"/></td>
                            <td><xsl:value-of select="isbn"/></td>
                            <td><xsl:value-of select="format"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
