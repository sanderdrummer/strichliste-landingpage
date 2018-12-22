+++
date = "2018-12-21T00:00:08+02:00"
draft = false
title = "Install strichliste"
[menu]
  [menu.main]
    parent = "Install"
+++

For strichliste to run, **PHP 7.1 or higher is required**. You should have a webserver running which supports **mod_php** or **php-fpm**.

### Installing

1. Go to the Github project to download the [latest release](https://github.com/strichliste/server/releases).
2. Extract the package content to your target directory (e.g. `tar xvfz strichliste.tar.gz -C /var/www/strichliste.yourdomain.tld`)
3. Move the database in `var/` from `app.db.example` to `app.db` if you want to use the default sqlite setup

If you want to keep sqlite as your database, you're done. Continue configuring your webserver

### Using a different database (optional)

The [ORM](https://www.doctrine-project.org/projects/doctrine-dbal/en/2.9/reference/platforms.html) used in
Strichliste supports multiple database backends such as:

* MySQL / MariaDB
* Oracle
* Microsoft SQL Server
* PostgreSQL
* SQLite

If you want to use another Database, just adjust the `DATABASE_URL` variable in your `.env` file in your root
directory according to the [Doctrine ORM](https://www.doctrine-project.org/projects/doctrine-dbal/en/2.9/reference/configuration.html#connecting-using-a-url)
recommendations.

Afterwards just run the following commands to create the database and schema.

```bash
php bin/console doctrine:database:create
php bin/console doctrine:schema:create
```

Make sure you have a user and database created beforehand.

### Configuring NGINX

Config examples for nginx can be found here:

* https://github.com/strichliste/server/blob/master/examples/nginx_ssl.conf (with SSL)
* https://github.com/strichliste/server/blob/master/examples/nginx.conf (without SSL)

### Configuring Apache

* https://github.com/strichliste/server/blob/master/examples/apache.conf (without SSL)
* TODO: SSL-Config

### Test your setup

To test if everything works, you can also run `php -S 0.0.0.0:8080` instead of running a webserver for now and navigate to `http://127.0.0.1:8080`

### Common Pitfalls

* Check your folder owner/group if you're using sqlite as your database! Otherwise strichliste can't write to it.

### Commands

#### Import strichliste 1 database

To import your old strichliste 1 database, copy your `database.sqlite` file, copy it to the strichliste2 directory and run:

`php bin/console app:import database.sqlite`

After import the terminal outputs "Import done!"



 