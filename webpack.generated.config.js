{
    "mode": "development",
    "context": "d:\\Work\\kantab\\kantab",
    "devtool": "cheap-module-eval-source-map",
    "node": {
        "setImmediate": false,
        "process": "mock",
        "dgram": "empty",
        "fs": "empty",
        "net": "empty",
        "tls": "empty",
        "child_process": "empty"
    },
    "output": {
        "path": "d:\\Work\\kantab\\kantab\\static",
        "filename": "[name].js",
        "publicPath": "/",
        "globalObject": "this"
    },
    "resolve": {
        "alias": {
            "@": "d:\\Work\\kantab\\kantab\\frontend",
            "vue$": "vue/dist/vue.runtime.esm.js"
        },
        "extensions": [
            ".js",
            ".jsx",
            ".vue",
            ".json"
        ],
        "modules": [
            "node_modules",
            "d:\\Work\\kantab\\kantab\\node_modules",
            "d:\\Work\\kantab\\kantab\\node_modules\\@vue\\cli-service\\node_modules"
        ]
    },
    "resolveLoader": {
        "modules": [
            "node_modules",
            "d:\\Work\\kantab\\kantab\\node_modules",
            "d:\\Work\\kantab\\kantab\\node_modules\\@vue\\cli-service\\node_modules"
        ]
    },
    "module": {
        "noParse": {},
        "rules": [
            {
                "test": {},
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "d:\\Work\\kantab\\kantab\\node_modules\\.cache\\vue-loader",
                            "cacheIdentifier": "7915fb74"
                        }
                    },
                    {
                        "loader": "vue-loader",
                        "options": {
                            "compilerOptions": {
                                "preserveWhitespace": false
                            },
                            "cacheDirectory": "d:\\Work\\kantab\\kantab\\node_modules\\.cache\\vue-loader",
                            "cacheIdentifier": "7915fb74"
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "img/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "file-loader",
                        "options": {
                            "name": "img/[name].[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "media/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "fonts/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "pug-plain-loader"
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "exclude": [
                    null
                ],
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "d:\\Work\\kantab\\kantab\\node_modules\\.cache\\babel-loader",
                            "cacheIdentifier": "44475975"
                        }
                    },
                    {
                        "loader": "babel-loader",
                        "options": {
                            "configFile": "./frontend/babel.config.js"
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        {},
        {
            "definitions": {
                "process.env": {
                    "BASE_URL": "\"/\""
                }
            }
        },
        {
            "options": {},
            "pathCache": {},
            "fsOperations": 0,
            "primed": false
        },
        {
            "compilationSuccessInfo": {},
            "shouldClearConsole": true,
            "formatters": [
                null,
                null,
                null,
                null
            ],
            "transformers": [
                null,
                null,
                null,
                null
            ]
        },
        {
            "options": {},
            "fullBuildTimeout": 200,
            "requestTimeout": 10000
        },
        {},
        {},
        {
            "options": {
                "template": "d:\\Work\\kantab\\kantab\\public\\index.html",
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "chunksSortMode": "auto",
                "meta": {},
                "title": "Webpack App",
                "xhtml": false
            }
        },
        {
            "options": {
                "iconPaths": {
                    "favicon32": "img/icons/favicon-32x32.png",
                    "favicon16": "img/icons/favicon-16x16.png",
                    "appleTouchIcon": "img/icons/apple-touch-icon-152x152.png",
                    "maskIcon": "img/icons/safari-pinned-tab.svg",
                    "msTileImage": "img/icons/msapplication-icon-144x144.png"
                },
                "name": "kantab",
                "themeColor": "#4DBA87",
                "msTileColor": "#000000",
                "appleMobileWebAppCapable": "no",
                "appleMobileWebAppStatusBarStyle": "default",
                "assetsVersion": "",
                "manifestPath": "manifest.json"
            }
        },
        {
            "options": {
                "rel": "preload",
                "include": "initial",
                "excludeHtmlNames": [],
                "fileBlacklist": [
                    {},
                    {}
                ]
            }
        },
        {
            "options": {
                "rel": "prefetch",
                "include": "asyncChunks",
                "excludeHtmlNames": [],
                "fileBlacklist": [
                    {}
                ]
            }
        },
        {}
    ],
    "entry": {
        "app": [
            "d:\\Work\\kantab\\kantab\\frontend\\main.js"
        ]
    }
}