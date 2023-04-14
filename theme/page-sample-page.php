<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package eCommerce
 */

get_header();
?>

<!-- THIS IS AN EXACT XD GRID. -->
<div class="w-max mx-auto w-[90rem] px-8 bg-slate-300">
  <div id="grid" class="grid grid-cols-12-100 gap-4 2xl:container">
    <div class="col-span-12 md:col-span-1 bg-red-300">Column 1</div>
    <div class="col-span-12 md:col-span-1 bg-blue-300">Column 2</div>
    <div class="col-span-12 md:col-span-1 bg-green-300"><h1 class="bg-blue-300">hello</h1></div>
    <div class="col-span-12 md:col-span-1 bg-yellow-300"><h1 class="bg-red-300">column 4</h1></div>
    <div class="col-span-12 md:col-span-1 bg-red-300">Column 5</div>
    <div class="col-span-12 md:col-span-1 bg-blue-300">Column 6</div>
    <div class="col-span-12 md:col-span-1 bg-green-300">Column 7</div>
    <div class="col-span-12 md:col-span-1 bg-yellow-300">Column 8</div>
    <div class="col-span-12 md:col-span-1 bg-red-300">Column 9</div>
    <div class="col-span-12 md:col-span-1 bg-blue-300">Column 10</div>
    <div class="col-span-12 md:col-span-1 bg-green-300">Column 11</div>
    <div class="col-span-12 md:col-span-1 bg-yellow-300">Column 12</div>
  </div>
</div>

<div class="container mx-auto px-8 bg-slate-300">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-1 w-1/12 bg-red-300">Column 1</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-blue-300">Column 2</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-green-300">Column 3</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-yellow-300">Column 4</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-red-300">Column 5</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-blue-300">Column 6</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-green-300">Column 7</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-yellow-300">Column 8</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-red-300">Column 9</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-blue-300">Column 10</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-green-300">Column 11</div>
    <div class="col-span-12 md:col-span-1 w-1/12 bg-yellow-300">Column 12</div>
  </div>
</div>

<?php
get_footer();
?>