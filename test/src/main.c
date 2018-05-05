#include <pebble.h>

static Window *g_window;
static TextLayer *g_text_layer;


void down_single_click_handler(ClickRecognizerRef recognizer, void *context) {
	// Window *window = (Window *)context;
	text_layer_set_text(g_text_layer, "DOWN!!!");
}

void window_load(Window *window)
{
 	//We will add the creation of the Window's elements here soon!
	// window_set_click_config_provider(&g_window, (ClickConfigProvider) config_provider);
}

void window_unload(Window *window)
{
	//We will safely destroy the Window's elements here!
	text_layer_destroy(g_text_layer);
}

void init()
{
	printf("Hello world");
	//Create the app elements here!
	g_window = window_create();
	window_set_window_handlers(g_window, (WindowHandlers) {
		.load = window_load,
		.unload = window_unload,
	});
	
	window_stack_push(g_window, true);
	
	g_text_layer = text_layer_create(GRect(0, 0, 144, 168));
	text_layer_set_background_color(g_text_layer, GColorClear);
	text_layer_set_text_color(g_text_layer, GColorBlack);
	
	layer_add_child(window_get_root_layer(g_window), text_layer_get_layer(g_text_layer));
	
	text_layer_set_text(g_text_layer, "Hello world!!!");

	window_single_click_subscribe(BUTTON_ID_DOWN, down_single_click_handler);
}

void deinit()
{
	//We will safely destroy the Window's elements here!
	window_destroy(g_window);
}

int main(void)
{
	init();
	app_event_loop();
	deinit();
}