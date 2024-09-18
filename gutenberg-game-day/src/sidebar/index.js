import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/editor';

const Sidebar = () => {
	return (
		<div>
			<h1>Hello from the sidebar!</h1>
		</div>
	);
};

registerPlugin( 'ggd-my-plugin-sidebar', {
    render: function () {
        return (
            <PluginSidebar
                name="my-plugin-sidebar"
                icon="admin-post"
                title="My plugin sidebar"
            >
                <Sidebar />
            </PluginSidebar>
        );
    },
} );
